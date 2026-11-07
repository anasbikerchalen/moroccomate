import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Heart, Trash2, ArrowRight, MapPin, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useSavedStore } from '../../state/savedStore';
import { getListingUrl } from '../../listings/placeRoutes';
import { cityMap } from '../../data/cities';

interface FavoritesDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function FavoritesDrawer({ isOpen, onClose }: FavoritesDrawerProps) {
  const { bookmarks, removeBookmark } = useSavedStore();
  const navigate = useNavigate();

  const handleCardClick = (bookmark: any) => {
    onClose();
    const url = getListingUrl({
      id: bookmark.id,
      city: bookmark.city,
      category: bookmark.category,
      type: bookmark.type,
      name: bookmark.name,
      title: bookmark.name,
    });

    if (url) {
      navigate(url);
    } else {
      const citySlug = String(bookmark.city || '').toLowerCase();
      const cat = String(bookmark.category || 'food').toLowerCase();
      navigate(`/finder/${citySlug}/${cat}`);
    }
  };

  const getCityName = (cityKey: string) => {
    const key = String(cityKey || '').toLowerCase();
    return cityMap[key]?.name || (key ? key.charAt(0).toUpperCase() + key.slice(1) : 'Morocco');
  };

  const getCategoryLabel = (cat?: string) => {
    switch (String(cat || '').toLowerCase()) {
      case 'food':
      case 'eat':
        return 'Food & Dining';
      case 'sleep':
      case 'stay':
        return 'Stays & Riads';
      case 'things-to-do':
      case 'things':
        return 'Things to Do';
      case 'shopping':
      case 'shop':
        return 'Shopping';
      default:
        return 'Place';
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-[#29231F]/40 backdrop-blur-xs"
            aria-hidden="true"
          />

          {/* Slide-over panel */}
          <motion.aside
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 280 }}
            className="fixed top-0 right-0 z-50 h-full w-full max-w-md bg-[#FAF7F2] text-[#29231F] shadow-2xl flex flex-col border-l border-[#EADFCE]"
            aria-label="Saved Places"
          >
            {/* Header */}
            <div className="px-6 py-5 border-b border-[#EADFCE] flex items-center justify-between bg-[#FFFDF9]/80 backdrop-blur-sm">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-[#FAF3EA] border border-[#E8DAAA] flex items-center justify-center">
                  <Heart className="w-4 h-4 text-[#C85A32] fill-[#C85A32]" />
                </div>
                <div>
                  <h2 className="font-display text-lg font-bold leading-none text-[#29231F]">Saved Places</h2>
                  <p className="text-[11px] text-[#71685F] font-sans mt-0.5">
                    {bookmarks.length === 0
                      ? 'No items saved'
                      : `${bookmarks.length} ${bookmarks.length === 1 ? 'place' : 'places'} saved`}
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={onClose}
                className="w-8 h-8 rounded-full bg-white hover:bg-[#FAF3EA] border border-[#EADFCE] flex items-center justify-center text-[#71685F] hover:text-[#29231F] transition-colors cursor-pointer"
                aria-label="Close saved places"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Content Body */}
            <div className="flex-1 overflow-y-auto p-6 space-y-3">
              {bookmarks.length === 0 ? (
                <div className="h-full min-h-[300px] flex flex-col items-center justify-center text-center px-4">
                  <div className="w-16 h-16 rounded-full bg-[#FAF3EA] border border-[#E8DAAA] flex items-center justify-center mb-4">
                    <Heart className="w-8 h-8 text-[#C85A32]/60" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-[#29231F]">Your list is empty</h3>
                  <p className="text-xs text-[#71685F] max-w-xs mt-2 leading-relaxed">
                    Whenever you find a food spot, riad, tour, or craft shop you love, tap the bookmark icon to save it here for quick access.
                  </p>
                  <button
                    type="button"
                    onClick={onClose}
                    className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#C9A84C] hover:bg-[#b8953c] text-white text-xs font-bold shadow-xs transition-colors cursor-pointer"
                  >
                    <span>Start Exploring</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              ) : (
                bookmarks.map((item) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    onClick={() => handleCardClick(item)}
                    className="group bg-white rounded-2xl p-3.5 border border-[#EADFCE] shadow-xs hover:border-[#C9A84C] hover:shadow-md transition-all cursor-pointer flex items-center gap-3.5"
                  >
                    {/* Thumbnail */}
                    <div className="w-16 h-16 rounded-xl overflow-hidden bg-[#FAF3EA] shrink-0 border border-[#EADFCE]/60">
                      {item.image ? (
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          onError={(e) => {
                            (e.target as HTMLElement).style.display = 'none';
                          }}
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-[#C9A84C]">
                          <Sparkles className="w-5 h-5" />
                        </div>
                      )}
                    </div>

                    {/* Details */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1.5 text-[10px] font-bold text-[#C85A32] uppercase tracking-wider">
                        <MapPin className="w-2.5 h-2.5" />
                        <span>{getCityName(item.city)}</span>
                        <span>·</span>
                        <span className="text-[#71685F]">{getCategoryLabel(item.category)}</span>
                      </div>
                      <h4 className="font-serif text-base font-medium text-[#29231F] group-hover:text-[#C85A32] transition-colors truncate mt-0.5">
                        {item.name}
                      </h4>
                      <p className="text-[11px] text-[#71685F] flex items-center gap-1 mt-1 group-hover:underline">
                        <span>View details</span>
                        <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
                      </p>
                    </div>

                    {/* Remove Action */}
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        removeBookmark(item.id);
                      }}
                      className="w-8 h-8 rounded-full flex items-center justify-center text-stone-300 hover:text-red-500 hover:bg-red-50 transition-colors shrink-0 cursor-pointer"
                      title="Remove from saved"
                      aria-label="Remove from saved"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </motion.div>
                ))
              )}
            </div>

            {/* Footer */}
            {bookmarks.length > 0 && (
              <div className="p-4 border-t border-[#EADFCE] bg-[#FFFDF9]/90 flex items-center justify-between text-xs text-[#71685F]">
                <span>Saved locally in your browser</span>
                <button
                  type="button"
                  onClick={() => {
                    if (window.confirm('Are you sure you want to clear all saved places?')) {
                      bookmarks.forEach((b) => removeBookmark(b.id));
                    }
                  }}
                  className="text-[#C85A32] hover:underline font-semibold cursor-pointer"
                >
                  Clear all
                </button>
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
