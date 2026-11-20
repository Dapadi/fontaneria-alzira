import {
  createIcons,
  Phone,
  MessageCircle,
  Wrench,
  Droplets,
  Sparkles,
  Bath,
  Flame,
  Cog,
  ShieldCheck,
  Hammer,
  CheckCircle2,
  MapPin,
  Clock,
  ArrowRight,
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  Star,
  UserCheck,
  MessageSquare,
  Sliders,
  Award,
  Mail,
  AlertCircle
} from 'lucide';

import { initNavigation } from './navigation';
import { initAnimations } from './animations';
import { initGallery } from './gallery';
import { initAccordion } from './accordion';
import { initContactForm } from './contact';
import { initAnalytics } from './analytics';

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize Lucide Icons
  createIcons({
    icons: {
      Phone,
      MessageCircle,
      Wrench,
      Droplets,
      Sparkles,
      Bath,
      Flame,
      Cog,
      ShieldCheck,
      Hammer,
      CheckCircle2,
      MapPin,
      Clock,
      ArrowRight,
      Menu,
      X,
      ChevronDown,
      ChevronRight,
      Star,
      UserCheck,
      MessageSquare,
      Sliders,
      Award,
      Mail,
      AlertCircle
    }
  });

  // 2. Initialize Interactive Modules
  initNavigation();
  initAnimations();
  initGallery();
  initAccordion();
  initContactForm();
  initAnalytics();
});
