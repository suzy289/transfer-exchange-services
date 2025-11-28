'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import { FileText, CheckCircle } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const STORAGE_KEY = 'terms_consent_accepted';

export default function TermsConsentBanner() {
  const { language } = useLanguage();
  const isFrench = language === 'fr';
  const [isVisible, setIsVisible] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isAccepted, setIsAccepted] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Vérifier l'acceptation au montage du composant
  useEffect(() => {
    setIsMounted(true);
    // Vérifier si l'utilisateur a déjà accepté
    if (typeof window !== 'undefined') {
      const accepted = localStorage.getItem(STORAGE_KEY);
      if (accepted === 'true') {
        setIsAccepted(true);
      }
    }
  }, []);

  // Détecter le scroll seulement si pas déjà accepté et monté
  useEffect(() => {
    if (!isMounted || isAccepted) {
      return;
    }

    // Détecter le scroll
    const handleScroll = () => {
      if (window.scrollY > 100 && !hasScrolled && !isVisible) {
        setHasScrolled(true);
        setIsVisible(true);
        // Sauvegarder la position du scroll
        const scrollY = window.scrollY;
        // Bloquer le scroll
        document.body.style.position = 'fixed';
        document.body.style.top = `-${scrollY}px`;
        document.body.style.width = '100%';
        document.body.style.overflow = 'hidden';
      }
    };

    // Empêcher le scroll même avec la molette
    const handleWheel = (e: WheelEvent) => {
      if (isVisible && !isAccepted) {
        e.preventDefault();
      }
    };

    // Empêcher le scroll avec le clavier
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isVisible && !isAccepted && ['ArrowDown', 'ArrowUp', 'PageDown', 'PageUp', 'Space'].includes(e.key)) {
        e.preventDefault();
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('keydown', handleKeyDown);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [hasScrolled, isVisible, isAccepted, isMounted]);

  const handleAccept = () => {
    localStorage.setItem(STORAGE_KEY, 'true');
    setIsAccepted(true);
    setIsVisible(false);
    
    // Réactiver le scroll et restaurer la position
    const scrollY = document.body.style.top;
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.width = '';
    document.body.style.overflow = '';
    
    if (scrollY) {
      window.scrollTo(0, parseInt(scrollY || '0') * -1);
    }
  };

  // Ne pas afficher si pas monté ou déjà accepté
  if (!isMounted || isAccepted) {
    return null;
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Overlay pour bloquer l'interaction */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-40"
          />
          
          {/* Banner en bas */}
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t-4 border-primary shadow-2xl"
          >
            <div className="container mx-auto px-4 py-6">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex items-start space-x-4 flex-1">
                  <div className="p-3 rounded-full bg-primary/10 text-primary flex-shrink-0">
                    <FileText className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-2 font-heading">
                      {isFrench ? 'Acceptation des conditions d\'utilisation' : 'Terms and conditions acceptance'}
                    </h3>
                    <p className="text-gray-700 text-sm md:text-base">
                      {isFrench
                        ? 'En continuant à utiliser ce site, vous acceptez nos termes et conditions d\'utilisation. Veuillez lire et accepter nos conditions pour continuer.'
                        : 'By continuing to use this site, you agree to our terms and conditions of use. Please read and accept our terms to continue.'}
                    </p>
                    <Link
                      href="/mentions-legales"
                      className="text-primary hover:underline text-sm font-semibold mt-2 inline-flex items-center"
                      target="_blank"
                    >
                      {isFrench ? 'Lire les conditions complètes' : 'Read full terms'}
                      <FileText className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </div>
                <div className="flex items-center gap-3 flex-shrink-0">
                  <Button
                    onClick={handleAccept}
                    variant="primary"
                    size="lg"
                    className="px-6 py-3 whitespace-nowrap"
                  >
                    <CheckCircle className="w-5 h-5 mr-2" />
                    {isFrench ? 'J\'accepte' : 'I accept'}
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

