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
  AlertCircle,
  Activity,
  Compass,
  Waves,
  Radio,
  Info,
  HelpCircle,
  Check,
  Filter
} from 'lucide';

import { initNavigation } from './navigation';
import { initAnimations } from './animations';
import { initGallery } from './gallery';
import { initAccordion } from './accordion';
import { initContactForm } from './contact';
import { initAnalytics } from './analytics';
import { initDiagnosticTool } from './diagnostic';
import { initLocalitiesMatrix } from './localities';

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
      AlertCircle,
      Activity,
      Compass,
      Waves,
      Radio,
      Info,
      HelpCircle,
      Check,
      Filter
    }
  });

  // 2. Initialize Interactive Modules
  initNavigation();
  initAnimations();
  initGallery();
  initAccordion();
  initContactForm();
  initAnalytics();
  initDiagnosticTool();
  initLocalitiesMatrix();
});
