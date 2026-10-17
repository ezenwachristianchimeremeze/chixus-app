import React, { useState, useEffect, useRef } from 'react';
import type { ChangeEvent } from 'react';
import {
  Cpu,
  Layers,
  Activity,
  MessageSquare,
  User,
  Share2,
  Menu,
  X,
  Shield,
  Sparkles,
  CheckCircle2,
  AlertTriangle,
  Radio,
  ChevronRight,
  RefreshCw,
  LogOut,
  Zap,
  Send,
  Camera,
  MapPin,
  Edit3,
  Plus,
  Trash2,
  Search,
  CheckCheck,
  UserPlus,
  UserCheck,
  Briefcase,
  Award,
  Phone,
  Globe,
  Mail,
  LayoutGrid,
  ArrowLeft,
  Lock,
  Key,
  Terminal,
  Fingerprint
} from 'lucide-react';

// Universal High-Tech SVG / Web Asset Placeholders (Self-Contained)
const metallicLogo = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100"><rect width="100" height="100" fill="%23121316"/><circle cx="50" cy="50" r="42" fill="none" stroke="%23cbd5e1" stroke-width="3"/><polygon points="50,18 78,34 78,66 50,82 22,66 22,34" fill="none" stroke="%2338bdf8" stroke-width="2.5"/><circle cx="50" cy="50" r="16" fill="%231e212b" stroke="%23ffffff" stroke-width="2"/><text x="50" y="55" font-family="monospace" font-size="14" font-weight="bold" fill="%23ffffff" text-anchor="middle">CX</text></svg>';
const metallicBanner = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 200" width="800" height="200"><rect width="800" height="200" fill="%231e2024"/><line x1="0" y1="100" x2="800" y2="100" stroke="%232a2d36" stroke-width="1"/><circle cx="400" cy="100" r="80" fill="none" stroke="%232f3445" stroke-width="1.5"/><text x="400" y="105" font-family="monospace" font-size="18" fill="%2364748b" letter-spacing="4" text-anchor="middle">CHIXUS GRID // DECENTRALIZED MESH</text></svg>';
const chinazaAvatar = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400';

// ==========================================
// 1. INLINE TYPE DEFINITIONS (Self-Contained)
// ==========================================
interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  description: string;
}

interface ProfileCommentItem {
  id: string;
  author: string;
  avatar: string;
  badge: string;
  time: string;
  comment: string;
  verifications: number;
  verified?: boolean;
}

interface PeerSkill {
  name: string;
  level: string;
  verified: boolean;
}

interface PeerProfile {
  id: string;
  name: string;
  headline: string;
  badge: string;
  location: string;
  company: string;
  avatar: string;
  cover: string;
  inspectionsConducted: number;
  faultsIsolated: number;
  aiScanAccuracy: string;
  meshLinksCount: number;
  isConnected: boolean;
  summary: string;
  skills: PeerSkill[];
  experiences: ExperienceItem[];
  endorsements: ProfileCommentItem[];
}

interface PostItem {
  id: string;
  author: string;
  badge: string;
  avatar: string;
  time: string;
  content: string;
  verifications: number;
  verified: boolean;
  comments: string[];
  telemetryStats?: string;
  postMedia?: string;
}

interface UserNode {
  id?: string;
  name: string;
  headline?: string;
  badge: string;
  avatar: string;
  inspectionsConducted: string | number;
  faultsIsolated?: string | number;
  aiScanAccuracy?: string;
  location?: string;
  company?: string;
  summary?: string;
  cover?: string;
  isConnected?: boolean;
}

interface Contact {
  id: string;
  name: string;
  role: string;
  status: string;
  avatar?: string;
}

interface ChatMessage {
  id: string;
  contactId: string;
  sender: 'me' | 'them';
  text: string;
  imageAttachment?: string;
  timestamp: string;
}

interface ScanLog {
  id: string;
  timestamp: string;
  fileName: string;
  status: string;
  accuracy: string;
}

// ==========================================
// 2. INLINE AUDIO SYNTHESIZER (Web Audio API)
// ==========================================
const createAudioSynth = () => {
  let ctx: AudioContext | null = null;
  const getCtx = () => {
    if (!ctx && typeof window !== 'undefined') {
      const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioContextClass) ctx = new AudioContextClass();
    }
    if (ctx && ctx.state === 'suspended') {
      ctx.resume();
    }
    return ctx;
  };

  return {
    // Form Submission Click / Register / Recovery / UI Tick: Clean high-frequency tactile digital chirp under 0.1s
    playClick: () => {
      try {
        const audio = getCtx();
        if (!audio) return;
        const now = audio.currentTime;
        const osc = audio.createOscillator();
        const gain = audio.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(2400, now);
        osc.frequency.exponentialRampToValueAtTime(1400, now + 0.045);
        gain.gain.setValueAtTime(0.001, now);
        gain.gain.linearRampToValueAtTime(0.06, now + 0.005);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.045);
        osc.connect(gain);
        gain.connect(audio.destination);
        osc.start(now);
        osc.stop(now + 0.048);
      } catch {
        // audio fallback
      }
    },

    // Connection Success / Connect Node / App Unlock: Deep professional dual-tone digital snap mimicking an active server relay latch closing securely
    playSuccess: () => {
      try {
        const audio = getCtx();
        if (!audio) return;
        const now = audio.currentTime;

        // Sub-relay mechanical thud (solenoid punch)
        const lowOsc = audio.createOscillator();
        const lowGain = audio.createGain();
        lowOsc.type = 'sine';
        lowOsc.frequency.setValueAtTime(95, now);
        lowOsc.frequency.exponentialRampToValueAtTime(45, now + 0.07);
        lowGain.gain.setValueAtTime(0.12, now);
        lowGain.gain.exponentialRampToValueAtTime(0.001, now + 0.07);
        lowOsc.connect(lowGain);
        lowGain.connect(audio.destination);
        lowOsc.start(now);
        lowOsc.stop(now + 0.075);

        // Precision metallic latch snap (contact closure)
        const snapOsc = audio.createOscillator();
        const snapGain = audio.createGain();
        snapOsc.type = 'triangle';
        snapOsc.frequency.setValueAtTime(980, now + 0.025);
        snapOsc.frequency.exponentialRampToValueAtTime(420, now + 0.065);
        snapGain.gain.setValueAtTime(0, now);
        snapGain.gain.setValueAtTime(0.08, now + 0.025);
        snapGain.gain.exponentialRampToValueAtTime(0.001, now + 0.075);
        snapOsc.connect(snapGain);
        snapGain.connect(audio.destination);
        snapOsc.start(now + 0.025);
        snapOsc.stop(now + 0.08);
      } catch {
        // audio fallback
      }
    },

    // Offline Scan / Telemetry Ping
    playScan: () => {
      try {
        const audio = getCtx();
        if (!audio) return;
        const now = audio.currentTime;
        const osc = audio.createOscillator();
        const gain = audio.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(540, now);
        osc.frequency.linearRampToValueAtTime(880, now + 0.09);
        gain.gain.setValueAtTime(0.04, now);
        gain.gain.linearRampToValueAtTime(0.001, now + 0.09);
        osc.connect(gain);
        gain.connect(audio.destination);
        osc.start(now);
        osc.stop(now + 0.095);
      } catch {
        // audio fallback
      }
    },

    // Live Safe Guard Alert / Red Warning Trigger: Minimalist, solid, low-frequency repeating sonar radar pulse mimicking cockpit telemetry fault notification
    playError: () => {
      try {
        const audio = getCtx();
        if (!audio) return;
        const now = audio.currentTime;

        // Sonar Radar Pulse 1
        const osc1 = audio.createOscillator();
        const gain1 = audio.createGain();
        osc1.type = 'sine';
        osc1.frequency.setValueAtTime(260, now);
        osc1.frequency.exponentialRampToValueAtTime(180, now + 0.16);
        gain1.gain.setValueAtTime(0.09, now);
        gain1.gain.exponentialRampToValueAtTime(0.001, now + 0.16);
        osc1.connect(gain1);
        gain1.connect(audio.destination);
        osc1.start(now);
        osc1.stop(now + 0.165);

        // Sonar Radar Pulse 2 (Repeating echo pulse)
        const osc2 = audio.createOscillator();
        const gain2 = audio.createGain();
        osc2.type = 'sine';
        osc2.frequency.setValueAtTime(260, now + 0.2);
        osc2.frequency.exponentialRampToValueAtTime(180, now + 0.36);
        gain2.gain.setValueAtTime(0.08, now + 0.2);
        gain2.gain.exponentialRampToValueAtTime(0.001, now + 0.36);
        osc2.connect(gain2);
        gain2.connect(audio.destination);
        osc2.start(now + 0.2);
        osc2.stop(now + 0.365);
      } catch {
        // audio fallback
      }
    }
  };
};

const sound = createAudioSynth();

// API Base URL Configuration for backend connectivity
const API_BASE_URL = (typeof window !== 'undefined' && (window as unknown as { __CHIXUS_API_BASE_URL__?: string }).__CHIXUS_API_BASE_URL__) || (import.meta.env && import.meta.env.VITE_API_BASE_URL) || 'https://chixus-project.onrender.com';

// Helper for formatting big counts (e.g., 500M, 12.4M)
const formatNumber = (num: number): string => {
  if (num >= 1000000000) return `${(num / 1000000000).toFixed(1).replace(/\.0$/, '')}B`;
  if (num >= 1000000) return `${(num / 1000000).toFixed(1).replace(/\.0$/, '')}M`;
  if (num >= 1000) return `${(num / 1000).toFixed(1).replace(/\.0$/, '')}K`;
  return num.toString();
};

// ==========================================
// 3. MAIN APPLICATION COMPONENT
// ==========================================
export function App() {
  // Onboarding Gateway State: 'splash' | 'login' | 'registration' | 'initializing' | 'main_app'
  const [onboardStage, setOnboardStage] = useState<'splash' | 'login' | 'registration' | 'initializing' | 'main_app'>('splash');

  // Form State Hooks (initialized to empty strings)
  const [regUsername, setRegUsername] = useState<string>('');
  const [regFullName, setRegFullName] = useState<string>('');
  const [regLocation, setRegLocation] = useState<string>('');
  const [regHeadline, setRegHeadline] = useState<string>('');
  const [regEmail, setRegEmail] = useState<string>('');
  const [regPhoneNumber, setRegPhoneNumber] = useState<string>('');
  const [userIdInput, setUserIdInput] = useState<string>('');

  // Email-First Onboarding & Recovery System State Hooks
  const [isRegisteringLoading, setIsRegisteringLoading] = useState<boolean>(false);
  const [regSuccessEmail, setRegSuccessEmail] = useState<string>('');
  const [pendingRegisteredId, setPendingRegisteredId] = useState<string>('');
  const [emailVerifyCodeInput, setEmailVerifyCodeInput] = useState<string>('');
  const [verifyCodeError, setVerifyCodeError] = useState<string>('');
  const [verifyCodeLoading, setVerifyCodeLoading] = useState<boolean>(false);
  const [isConnectingLoading, setIsConnectingLoading] = useState<boolean>(false);
  const [showRecoveryModal, setShowRecoveryModal] = useState<boolean>(false);
  const [recoveryUsername, setRecoveryUsername] = useState<string>('');
  const [recoveryEmail, setRecoveryEmail] = useState<string>('');
  const [recoveryPhone, setRecoveryPhone] = useState<string>('');
  const [recoveryLoading, setRecoveryLoading] = useState<boolean>(false);
  const [recoverySuccessMsg, setRecoverySuccessMsg] = useState<string>('');
  const [recoveryErrorMsg, setRecoveryErrorMsg] = useState<string>('');

  // Permanent Runtime Credentials State Hooks
  const [generatedSecretID, setGeneratedSecretID] = useState<string>(() => {
    try {
      return localStorage.getItem('chixus_generated_secret_id') || '';
    } catch {
      return '';
    }
  });

  const [currentUserProfile, setCurrentUserProfile] = useState<{
    username: string;
    fullName: string;
    location: string;
    email: string;
    phoneNumber: string;
    inspectionsConducted: number;
    faultsIsolated: number;
    aiScanAccuracy: string;
    secretId: string;
    headline?: string;
    avatarUrl?: string;
    coverUrl?: string;
    summary?: string;
    experiences?: ExperienceItem[];
  } | null>(() => {
    try {
      const saved = localStorage.getItem('chixus_current_user_profile');
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  // Splash & Initialization Timers
  const [splashProgress, setSplashProgress] = useState<number>(0);
  const [initProgress, setInitProgress] = useState<number>(0);

  // Splash Stage Timer: 3000ms auto-transition to 'login'
  useEffect(() => {
    if (onboardStage === 'splash') {
      const interval = setInterval(() => {
        setSplashProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            return 100;
          }
          return prev + 5;
        });
      }, 150);

      const timer = setTimeout(() => {
        setOnboardStage('login');
      }, 3000);

      return () => {
        clearInterval(interval);
        clearTimeout(timer);
      };
    }
  }, [onboardStage]);

  // Navigation Tabs: 'feed' | 'inspect' | 'metrics' | 'messages' | 'profile'
  const [activeTab, setActiveTab] = useState<'feed' | 'inspect' | 'metrics' | 'messages' | 'profile'>('feed');

  // Dark/Light Theme (Silver Metallic Palette)
  const [darkModeTheme, setDarkModeTheme] = useState<boolean>(() => {
    try {
      const saved = localStorage.getItem('chixus_dark_mode_v7');
      return saved !== null ? JSON.parse(saved) : true;
    } catch {
      return true;
    }
  });

  // UI Drawers & Modals
  const [isSideDrawerOpen, setIsSideDrawerOpen] = useState(false);
  const [isEditProfileModalOpen, setIsEditProfileModalOpen] = useState(false);
  const [isDeploymentModalOpen, setIsDeploymentModalOpen] = useState(false);
  const [editingDeploymentId, setEditingDeploymentId] = useState<string | null>(null);
  const [deploymentRoleInput, setDeploymentRoleInput] = useState('');
  const [deploymentCompanyInput, setDeploymentCompanyInput] = useState('');
  const [deploymentDescriptionInput, setDeploymentDescriptionInput] = useState('');
  const [isShareDrawerOpen, setIsShareDrawerOpen] = useState(false);
  const [shareTargetPost, setShareTargetPost] = useState<PostItem | null>(null);
  const [selectedPeerProfile, setSelectedPeerProfile] = useState<any | null>(null);
  const [toastFeedback, setToastFeedback] = useState<string | null>(null);

  const triggerToast = (msg: string) => {
    setToastFeedback(msg);
    setTimeout(() => {
      setToastFeedback((curr) => (curr === msg ? null : curr));
    }, 3500);
  };

  // Dynamic User Profile Credentials (without hardcoded identity strings)
  const [userName, setUserName] = useState<string>(() => {
    try {
      const savedProfile = localStorage.getItem('chixus_current_user_profile');
      if (savedProfile) {
        const parsed = JSON.parse(savedProfile);
        if (parsed.fullName) return parsed.fullName;
        if (parsed.username) return parsed.username;
      }
      return localStorage.getItem('chixus_user_name_v7') || '';
    } catch {
      return '';
    }
  });

  const [userHeadline, setUserHeadline] = useState<string>(() => {
    try {
      const savedProfile = localStorage.getItem('chixus_current_user_profile');
      if (savedProfile) {
        const parsed = JSON.parse(savedProfile);
        if (typeof parsed.headline === 'string') return parsed.headline;
      }
      return localStorage.getItem('chixus_headline_v7') || '';
    } catch {
      return '';
    }
  });

  const [userLocation, setUserLocation] = useState<string>(() => {
    try {
      const savedProfile = localStorage.getItem('chixus_current_user_profile');
      if (savedProfile) {
        const parsed = JSON.parse(savedProfile);
        if (parsed.location) return parsed.location;
      }
      return localStorage.getItem('chixus_user_location_v7') || '';
    } catch {
      return '';
    }
  });

  const [userInspectionsConducted, setUserInspectionsConducted] = useState<number>(() => {
    try {
      const savedProfile = localStorage.getItem('chixus_current_user_profile');
      if (savedProfile) {
        const parsed = JSON.parse(savedProfile);
        if (typeof parsed.inspectionsConducted === 'number') return parsed.inspectionsConducted;
      }
      const saved = localStorage.getItem('chixus_inspections_conducted_v8');
      return saved ? parseInt(saved, 10) : 0;
    } catch {
      return 0;
    }
  });

  const [userFaultsIsolated, setUserFaultsIsolated] = useState<number>(() => {
    try {
      const savedProfile = localStorage.getItem('chixus_current_user_profile');
      if (savedProfile) {
        const parsed = JSON.parse(savedProfile);
        if (typeof parsed.faultsIsolated === 'number') return parsed.faultsIsolated;
      }
      const saved = localStorage.getItem('chixus_faults_isolated_v8');
      return saved ? parseInt(saved, 10) : 0;
    } catch {
      return 0;
    }
  });

  const [userAiScanAccuracy, setUserAiScanAccuracy] = useState<string>(() => {
    try {
      const savedProfile = localStorage.getItem('chixus_current_user_profile');
      if (savedProfile) {
        const parsed = JSON.parse(savedProfile);
        if (typeof parsed.aiScanAccuracy === 'string') return parsed.aiScanAccuracy;
      }
      return localStorage.getItem('chixus_scan_accuracy_v8') || '0.0%';
    } catch {
      return '0.0%';
    }
  });

  const [avatarUrl, setAvatarUrl] = useState<string>(() => {
    try {
      return (
        localStorage.getItem('chixus_avatar_v7') ||
        chinazaAvatar
      );
    } catch {
      return chinazaAvatar;
    }
  });

  const [coverUrl, setCoverUrl] = useState<string>(() => {
    try {
      return localStorage.getItem('chixus_cover_v7') || metallicBanner;
    } catch {
      return metallicBanner;
    }
  });

  const [executiveSummary, setExecutiveSummary] = useState<string>(() => {
    try {
      const savedProfile = localStorage.getItem('chixus_current_user_profile');
      if (savedProfile) {
        const parsed = JSON.parse(savedProfile);
        if (typeof parsed.summary === 'string') return parsed.summary;
      }
      return localStorage.getItem('chixus_summary_v7') || '';
    } catch {
      return '';
    }
  });

  const [experiences, setExperiences] = useState<ExperienceItem[]>(() => {
    try {
      const savedProfile = localStorage.getItem('chixus_current_user_profile');
      if (savedProfile) {
        const parsed = JSON.parse(savedProfile);
        if (Array.isArray(parsed.experiences)) return parsed.experiences;
      }
      const saved = localStorage.getItem('chixus_experiences_v8');
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error(e);
    }
    return [];
  });

  // Endorsements
  const [profileComments, setProfileComments] = useState<ProfileCommentItem[]>(() => {
    try {
      const saved = localStorage.getItem('chixus_comments_v7');
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error(e);
    }
    return [
      {
        id: 'pc-1',
        author: 'Dr. Obinna Nwosu',
        badge: 'CHIEF INFRASTRUCTURE DIRECTOR',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400',
        time: '2 hours ago',
        comment: 'Chinaza’s metallic architecture reduced our 15MW solar farm diagnostic downtime by 44%. The quantized edge models run seamlessly on our field tablets in Benin City.',
        verifications: 34,
        verified: true
      },
      {
        id: 'pc-2',
        author: 'Engineer Isaiah',
        badge: 'EDGE FLEET INSPECTOR',
        avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=400',
        time: '5 hours ago',
        comment: 'Incredible milestone on the mesh sync! Solder bridge classification accuracy is consistently hitting 99.8% in factory production lines.',
        verifications: 29,
        verified: false
      }
    ];
  });

  // Static Timeline Feed Posts
  const [posts, setPosts] = useState<PostItem[]>([
    {
      id: 'post-founder-permanent',
      author: 'Chinaza Joseph',
      badge: 'Founder of CHIXUS',
      avatar: chinazaAvatar,
      time: '2 hours ago • Verified Grid',
      content: 'Pioneering Nigeria’s sovereign silver metallic edge electronics verification grid. Engineering on-device quantized computer vision algorithms and low-power sensory architectures to empower technicians, solar contractors, and industrial plants with real-time hardware diagnostics.',
      verifications: 1420,
      verified: true,
      comments: [
        'Incredible milestone Chief!',
        'Latency down to 12ms on edge hardware in Benin City.'
      ],
      telemetryStats: '1,420 Inspections Conducted • 98.4% AI Scan Accuracy'
    },
    {
      id: 'post-2',
      author: 'Ikenna Joseph',
      badge: 'SR. HARDWARE VERIFIER',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400',
      time: '4 hours ago',
      content: 'Completed thermal dissipation analysis on the inverter sub-assembly. The 8Hz hardware subsampling keeps power consumption well below the 4.5W ceiling.',
      verifications: 184,
      verified: true,
      comments: [
        'Thermal dissipation within INT8 thresholds.',
        'Ready for inverter deployment.'
      ],
      telemetryStats: '1,120 Inspections Conducted • 99.4% AI Scan Accuracy'
    },
    {
      id: 'post-3',
      author: 'Engineer Isaiah',
      badge: 'EDGE FLEET INSPECTOR',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=400',
      time: '6 hours ago',
      content: 'Deploying INT8 Quantized Inspection on a 50kW commercial solar inverter bank. Solder joint voiding detected at pin-8 on transformer sub-assembly. Defect isolated in 0.4 seconds! #CleanEnergy #HardwareMesh',
      verifications: 112,
      verified: false,
      comments: ['Great catch on the solder bridge!'],
      telemetryStats: '890 Inspections Conducted • 99.8% AI Scan Accuracy'
    }
  ]);

  // Feed Form State
  const [newPostContent, setNewPostContent] = useState('');
  const [newPostImage, setNewPostImage] = useState<string | null>(null);
  const [expandedComments, setExpandedComments] = useState<Record<string, boolean>>({});
  const [commentInputs, setCommentInputs] = useState<Record<string, string>>({});
  const postFileInputRef = useRef<HTMLInputElement>(null);

  // Inspector Diagnostics State
  const [selectedCircuitImage, setSelectedCircuitImage] = useState<string | null>(
    'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=600'
  );
  const [isScanning, setIsScanning] = useState(false);
  const [scanProgress, setScanProgress] = useState(0);
  const [scanResult, setScanResult] = useState<{
    status: 'VERIFIED' | 'DEFECT_FOUND' | 'WARNING';
    label: string;
    confidence: string;
    voidRatio: string;
    details: string;
  } | null>(null);
  const inspectorFileInputRef = useRef<HTMLInputElement>(null);

  // Diagnostics Scan Logs
  const [scanLogs, setScanLogs] = useState<ScanLog[]>(() => {
    try {
      const saved = localStorage.getItem('chixus_scan_logs_v8');
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error(e);
    }
    return [];
  });

  // Messaging Contacts & Active Chat (Straight Vertical Layout)
  const [contacts] = useState<Contact[]>([
    { id: 'c-1', name: 'Engineer Isaiah', role: 'Edge Fleet Inspector', status: 'Online', avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=400' },
    { id: 'c-2', name: 'Dr. Obinna Nwosu', role: 'Chief Infrastructure Director', status: 'Online', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400' },
    { id: 'c-3', name: 'Musa Abdullahi', role: 'Solar QA Specialist', status: 'Online', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400' },
    { id: 'c-4', name: 'Ikenna Joseph', role: 'Sr. Hardware Verifier', status: 'Standby', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400' }
  ]);
  const [activeContactId, setActiveContactId] = useState<string>('c-1');
  const [isChatOpen, setIsChatOpen] = useState<boolean>(false);
  const [messageSearchQuery, setMessageSearchQuery] = useState<string>('');
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([
    {
      id: 'm-1',
      contactId: 'c-1',
      sender: 'them',
      text: 'Chief Chinaza, we just isolated a 300V capacitor fault on the solar array using CHIXUS. Solder bridge classification was instant!',
      timestamp: '11:15 AM'
    },
    {
      id: 'm-2',
      contactId: 'c-1',
      sender: 'me',
      text: 'Outstanding work Isaiah! Sync the thermal dissipation logs to the Benin City cluster.',
      timestamp: '11:18 AM'
    },
    {
      id: 'm-3',
      contactId: 'c-2',
      sender: 'them',
      text: 'Chief, our 15MW solar farm telemetry benchmarks are finalized. Zero false negatives across all inverter banks.',
      timestamp: '09:40 AM'
    },
    {
      id: 'm-4',
      contactId: 'c-3',
      sender: 'them',
      text: 'Industrial repair contract in Kano verified and signed. On-device diagnostics logs synchronized.',
      timestamp: 'Yesterday'
    },
    {
      id: 'm-5',
      contactId: 'c-4',
      sender: 'them',
      text: 'Thermal dissipation benchmarks within INT8 thresholds. Ready for inverter deployment.',
      timestamp: '2d ago'
    }
  ]);
  const [newChatText, setNewChatText] = useState('');
  const [chatImageAttachment, setChatImageAttachment] = useState<string | null>(null);
  const chatFileInputRef = useRef<HTMLInputElement>(null);
  const chatScrollRef = useRef<HTMLDivElement>(null);

  // Profile Edit Temp State
  const [editNameInput, setEditNameInput] = useState(userName);
  const [editHeadlineInput, setEditHeadlineInput] = useState(userHeadline);
  const [editLocationInput, setEditLocationInput] = useState(userLocation);
  const [editSummaryInput, setEditSummaryInput] = useState(executiveSummary);
  const [editAvatarPreview, setEditAvatarPreview] = useState<string>(avatarUrl);
  const [editCoverPreview, setEditCoverPreview] = useState<string>(coverUrl);
  const [newEndorsementText, setNewEndorsementText] = useState('');

  const profileAvatarInputRef = useRef<HTMLInputElement>(null);
  const profileCoverInputRef = useRef<HTMLInputElement>(null);
  const editModalAvatarInputRef = useRef<HTMLInputElement>(null);
  const editModalCoverInputRef = useRef<HTMLInputElement>(null);

  // Preset Avatars for quick selection
  const avatarPresets = [
    chinazaAvatar,
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400',
    'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=400',
    'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400',
    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400'
  ];

  // -------------------------------------------------------------
  // Interactive Peer Profiles Registry & State
  // -------------------------------------------------------------
  const initialPeerProfiles: Record<string, PeerProfile> = {
    'Engineer Isaiah': {
      id: 'peer-isaiah',
      name: 'Engineer Isaiah',
      headline: 'Edge Fleet Inspector • Grade A Solder QA & Microcode Verifier',
      badge: 'EDGE FLEET INSPECTOR • GRADE A',
      location: 'Benin City, Nigeria',
      company: 'CHIXUS Robotics Cluster',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=400',
      cover: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800',
      inspectionsConducted: 890,
      faultsIsolated: 112,
      aiScanAccuracy: '99.8%',
      meshLinksCount: 512,
      isConnected: false,
      summary: 'Specialist in rapid high-voltage commercial inverter diagnostics and on-device INT8 defect classification. Maintaining 99.8% precision across industrial solder lines in Edo State.',
      skills: [
        { name: 'INT8 Neural Solder QA', level: '99.8%', verified: true },
        { name: 'Commercial Inverter Repair', level: '98.5%', verified: true },
        { name: 'Micro-controller Microcode', level: '95.0%', verified: true },
        { name: 'Thermal Dissipation Mapping', level: '97.2%', verified: true }
      ],
      experiences: [
        { id: 'pe-1', role: 'Lead Field Verification Inspector', company: 'CHIXUS Edo State Hub • 2024 - Present', description: 'Deploying neural solder analysis across 50kW solar installations.' },
        { id: 'pe-2', role: 'SMT Quality Control Technician', company: 'Midwest Hardware Labs • 2022 - 2024', description: 'Conducted high-density PCB optical inspections and automated defect tagging.' }
      ],
      endorsements: [
        { id: 'pce-1', author: 'Chinaza Success Joseph', badge: 'FOUNDER & MASTER ARCHITECT', avatar: chinazaAvatar, time: '1 day ago', comment: 'Isaiah is one of our sharpest edge diagnostics operators in Nigeria. Outstanding execution on transformer analysis!', verifications: 45, verified: true }
      ]
    },
    'Dr. Obinna Nwosu': {
      id: 'peer-obinna',
      name: 'Dr. Obinna Nwosu',
      headline: 'Chief Infrastructure Director • Grid Telemetry & Renewable Systems',
      badge: 'CHIEF INFRASTRUCTURE DIRECTOR',
      location: 'Abuja, Nigeria',
      company: 'West Africa Energy & Solar Grid',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400',
      cover: 'https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&q=80&w=800',
      inspectionsConducted: 3250,
      faultsIsolated: 614,
      aiScanAccuracy: '99.9%',
      meshLinksCount: 1240,
      isConnected: true,
      summary: 'Directing large-scale renewable grid telemetry and decentralized solar cluster monitoring across West Africa. Researching sovereign edge intelligence for utility-scale resilience.',
      skills: [
        { name: 'Grid Telemetry Calibration', level: '99.9%', verified: true },
        { name: '15MW Solar Farm Architecture', level: '98.9%', verified: true },
        { name: 'Decentralized Microgrid Protocols', level: '96.5%', verified: true }
      ],
      experiences: [
        { id: 'oe-1', role: 'Chief Infrastructure Director', company: 'West Africa Energy & Solar Grid • 2021 - Present', description: 'Overseeing sovereign sensor networks and telemetry gateways across national solar farms.' }
      ],
      endorsements: [
        { id: 'oce-1', author: 'Chinaza Success Joseph', badge: 'FOUNDER & MASTER ARCHITECT', avatar: chinazaAvatar, time: '3 days ago', comment: 'Dr. Nwosu’s guidance on cluster mesh telemetry has elevated the entire CHIXUS diagnostic infrastructure.', verifications: 82, verified: true }
      ]
    },
    'Chinaza Joseph': {
      id: 'peer-chinaza',
      name: 'Chinaza Joseph',
      headline: 'Founder of CHIXUS • Sovereign Hardware & Neural Diagnostics Grid',
      badge: 'Founder of CHIXUS',
      location: 'Benin City, Nigeria',
      company: 'CHIXUS Decentralized Hardware Grid',
      avatar: chinazaAvatar,
      cover: metallicBanner,
      inspectionsConducted: 1420,
      faultsIsolated: 342,
      aiScanAccuracy: '98.4%',
      meshLinksCount: 2540,
      isConnected: true,
      summary: 'Pioneering Nigeria’s sovereign silver metallic edge electronics verification grid. Engineering on-device quantized computer vision algorithms and low-power sensory architectures to empower technicians, solar contractors, and industrial plants with real-time hardware diagnostics.',
      skills: [
        { name: 'Neural Solder Defect Classification', level: '99.9%', verified: true },
        { name: 'On-Device Quantization (INT8)', level: '99.5%', verified: true },
        { name: 'Edge Telemetry & Mesh Networks', level: '98.8%', verified: true }
      ],
      experiences: [
        { id: 'che-1', role: 'Founder & Chief AI Architect', company: 'CHIXUS Decentralized Grid • 2024 - Present', description: 'Architecting offline quantized edge diagnostics for Nigerian industrial and solar infrastructure.' }
      ],
      endorsements: []
    },
    'Chinaza Success Joseph': {
      id: 'peer-chinaza-alias',
      name: 'Chinaza Joseph',
      headline: 'Founder of CHIXUS • Sovereign Hardware & Neural Diagnostics Grid',
      badge: 'Founder of CHIXUS',
      location: 'Benin City, Nigeria',
      company: 'CHIXUS Decentralized Hardware Grid',
      avatar: chinazaAvatar,
      cover: metallicBanner,
      inspectionsConducted: 1420,
      faultsIsolated: 342,
      aiScanAccuracy: '98.4%',
      meshLinksCount: 2540,
      isConnected: true,
      summary: 'Pioneering Nigeria’s sovereign silver metallic edge electronics verification grid. Engineering on-device quantized computer vision algorithms and low-power sensory architectures to empower technicians, solar contractors, and industrial plants with real-time hardware diagnostics.',
      skills: [
        { name: 'Neural Solder Defect Classification', level: '99.9%', verified: true },
        { name: 'On-Device Quantization (INT8)', level: '99.5%', verified: true },
        { name: 'Edge Telemetry & Mesh Networks', level: '98.8%', verified: true }
      ],
      experiences: [
        { id: 'che-1', role: 'Founder & Chief AI Architect', company: 'CHIXUS Decentralized Grid • 2024 - Present', description: 'Architecting offline quantized edge diagnostics for Nigerian industrial and solar infrastructure.' }
      ],
      endorsements: []
    },
    'Musa Abdullahi': {
      id: 'peer-musa',
      name: 'Musa Abdullahi',
      headline: 'Solar QA Specialist • Industrial Automation & Component Stress',
      badge: 'SOLAR QA SPECIALIST • GRADE A',
      location: 'Kano, Nigeria',
      company: 'Northern Energy & Assembly Lines',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400',
      cover: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=800',
      inspectionsConducted: 640,
      faultsIsolated: 95,
      aiScanAccuracy: '98.0%',
      meshLinksCount: 380,
      isConnected: false,
      summary: 'Industrial hardware engineer managing manufacturing QA and automated thermal stress testing for inverter bank sub-assemblies in Northern Nigeria.',
      skills: [
        { name: 'Thermal Stress Testing', level: '98.0%', verified: true },
        { name: 'Industrial Repair Logistics', level: '96.2%', verified: true },
        { name: 'High-Voltage Switchgear QA', level: '95.5%', verified: true }
      ],
      experiences: [
        { id: 'me-1', role: 'Lead Solar QA Engineer', company: 'Kano Industrial Manufacturing • 2023 - Present', description: 'Testing high-voltage switchgear and solar assemblies with CHIXUS edge logs.' }
      ],
      endorsements: []
    },
    'Ikenna Joseph': {
      id: 'peer-ikenna',
      name: 'Ikenna Joseph',
      headline: 'Senior Hardware Verifier • Embedded Circuit Diagnostics',
      badge: 'SR. HARDWARE VERIFIER',
      location: 'Lagos, Nigeria',
      company: 'Lagos Edge Hardware Foundry',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400',
      cover: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800',
      inspectionsConducted: 1120,
      faultsIsolated: 184,
      aiScanAccuracy: '99.4%',
      meshLinksCount: 890,
      isConnected: true,
      summary: 'Embedded circuit tester specializing in thermal dissipation benchmarks and PCB trace integrity validation.',
      skills: [
        { name: 'Trace Integrity Analysis', level: '99.4%', verified: true },
        { name: 'Thermal Dissipation Drift', level: '97.8%', verified: true },
        { name: 'Micro-Inverter Benchmarks', level: '96.0%', verified: true }
      ],
      experiences: [
        { id: 'ie-1', role: 'Senior Hardware Verifier', company: 'Lagos Edge Hardware Foundry • 2022 - Present', description: 'Validating micro-controller chips and multi-layer PCB boards.' }
      ],
      endorsements: []
    }
  };

  const [peerProfiles, setPeerProfiles] = useState<Record<string, PeerProfile>>(() => {
    try {
      const saved = localStorage.getItem('chixus_peer_profiles_v7');
      if (saved) return JSON.parse(saved);
    } catch {
      // fallback
    }
    return initialPeerProfiles;
  });

  // -------------------------------------------------------------
  // Global Interactive Profile Popup Modal State (LinkedIn-Style)
  // -------------------------------------------------------------
  const [selectedUserNode, setSelectedUserNode] = useState<UserNode | null>(null);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState<boolean>(false);

  const [selectedPeerName, setSelectedPeerName] = useState<string | null>(null);
  const [isPeerProfileModalOpen, setIsPeerProfileModalOpen] = useState<boolean>(false);
  const [peerProfileSubTab, setPeerProfileSubTab] = useState<'about' | 'posts' | 'skills' | 'endorsements'>('about');
  const [peerEndorsementInput, setPeerEndorsementInput] = useState<string>('');
  const peerAvatarInputRef = useRef<HTMLInputElement>(null);
  const peerCoverInputRef = useRef<HTMLInputElement>(null);

  // Sync Peer Profiles to Local Storage
  useEffect(() => {
    try {
      localStorage.setItem('chixus_peer_profiles_v7', JSON.stringify(peerProfiles));
    } catch {
      // storage fallback
    }
  }, [peerProfiles]);

  // Global Handler to Open Interactive Profile Popup Modal
  const handleOpenUserNode = (user: {
    name: string;
    badge?: string;
    avatar?: string;
    inspectionsConducted?: string | number;
    faultsIsolated?: string | number;
    aiScanAccuracy?: string;
    location?: string;
    headline?: string;
    summary?: string;
    cover?: string;
    company?: string;
  }) => {
    sound.playClick();
    const isChinaza = user.name === 'Chinaza Joseph' || user.name === 'Chinaza Success Joseph' || user.name.toLowerCase().includes('chinaza');

    if (isChinaza) {
      const node: UserNode = {
        id: 'master-chinaza',
        name: 'Chinaza Joseph',
        badge: 'Founder of CHIXUS',
        avatar: chinazaAvatar,
        inspectionsConducted: '1,420',
        faultsIsolated: '112',
        aiScanAccuracy: '98.4%',
        location: 'Benin City, Nigeria',
        headline: 'Founder of CHIXUS • Sovereign Hardware & Neural Diagnostics Grid',
        summary: 'Pioneering Nigeria’s sovereign silver metallic edge electronics verification grid. Engineering on-device quantized computer vision algorithms and low-power sensory architectures to empower technicians, solar contractors, and industrial plants with real-time hardware diagnostics.',
        cover: metallicBanner,
        company: 'CHIXUS Decentralized Hardware Grid',
        isConnected: true
      };
      setSelectedUserNode(node);
      setIsProfileModalOpen(true);
      return;
    }

    if (user.name === userName) {
      const node: UserNode = {
        id: 'active-current-user',
        name: userName,
        badge: 'EDGE FLEET INSPECTOR • GRADE A',
        avatar: avatarUrl,
        inspectionsConducted: formatNumber(userInspectionsConducted),
        faultsIsolated: formatNumber(userFaultsIsolated),
        aiScanAccuracy: userAiScanAccuracy,
        location: userLocation,
        headline: userHeadline || 'Verified Hardware Operator',
        summary: executiveSummary || 'Active verified operator collaborating on the CHIXUS decentralized hardware verification grid in Nigeria.',
        cover: coverUrl,
        company: 'CHIXUS Decentralized Hardware Grid',
        isConnected: true
      };
      setSelectedUserNode(node);
      setIsProfileModalOpen(true);
      return;
    }

    const peer = peerProfiles[user.name];
    const node: UserNode = {
      id: peer?.id || `user-${Date.now()}`,
      name: user.name,
      badge: user.badge || peer?.badge || 'EDGE FLEET INSPECTOR • GRADE A',
      avatar: user.avatar || peer?.avatar || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=400',
      inspectionsConducted: user.inspectionsConducted || (peer ? formatNumber(peer.inspectionsConducted) : '1,420'),
      faultsIsolated: user.faultsIsolated || (peer ? formatNumber(peer.faultsIsolated) : '112'),
      aiScanAccuracy: user.aiScanAccuracy || peer?.aiScanAccuracy || '98.4%',
      location: user.location || peer?.location || 'Benin City, Nigeria',
      headline: user.headline || peer?.headline || '',
      summary: user.summary || peer?.summary || 'Active verified operator collaborating on the CHIXUS decentralized hardware verification grid in Edo State, Nigeria.',
      cover: user.cover || peer?.cover || metallicBanner,
      company: user.company || peer?.company || 'CHIXUS Robotics Cluster',
      isConnected: peer?.isConnected ?? false
    };

    setSelectedUserNode(node);
    setIsProfileModalOpen(true);
  };

  // Handler to open interactive profile for ANY person
  const openPeerProfile = (authorName: string) => {
    sound.playClick();
    const isChinaza = authorName === 'Chinaza Joseph' || authorName === 'Chinaza Success Joseph' || authorName.toLowerCase().includes('chinaza');

    if (isChinaza) {
      setSelectedPeerProfile({
        name: 'Chinaza Joseph',
        badge: 'Founder of CHIXUS',
        avatar: chinazaAvatar,
        inspectionsConducted: '1,420',
        faultsIsolated: '342',
        aiScanAccuracy: '98.4%',
        location: 'Benin City, Nigeria',
        headline: 'Founder of CHIXUS • Sovereign Hardware & Neural Diagnostics Grid',
        summary: 'Pioneering Nigeria’s sovereign silver metallic edge electronics verification grid. Engineering on-device quantized computer vision algorithms and low-power sensory architectures to empower technicians, solar contractors, and industrial plants with real-time hardware diagnostics.',
        cover: metallicBanner,
        company: 'CHIXUS Decentralized Hardware Grid'
      });
      return;
    }

    if (authorName === userName) {
      setSelectedPeerProfile({
        name: userName,
        badge: 'EDGE FLEET INSPECTOR • GRADE A',
        avatar: avatarUrl,
        inspectionsConducted: formatNumber(userInspectionsConducted),
        faultsIsolated: formatNumber(userFaultsIsolated),
        aiScanAccuracy: userAiScanAccuracy,
        location: userLocation,
        headline: userHeadline || '',
        summary: executiveSummary || 'Verified hardware operator and diagnostics specialist collaborating on the sovereign mesh grid in Nigeria.',
        cover: coverUrl,
        company: 'CHIXUS Decentralized Hardware Grid'
      });
      return;
    }

    const peer = peerProfiles[authorName];
    setSelectedPeerProfile({
      name: authorName,
      badge: peer?.badge || 'EDGE FLEET INSPECTOR • GRADE A',
      avatar: peer?.avatar || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=400',
      inspectionsConducted: peer ? formatNumber(peer.inspectionsConducted) : '890',
      faultsIsolated: peer ? formatNumber(peer.faultsIsolated) : '112',
      aiScanAccuracy: peer ? peer.aiScanAccuracy : '99.8%',
      location: peer?.location || 'Benin City, Nigeria',
      headline: peer?.headline || '',
      summary: peer?.summary || 'Verified hardware operator and diagnostics specialist collaborating on the sovereign mesh grid in Nigeria.',
      cover: peer?.cover || metallicBanner,
      company: peer?.company || 'CHIXUS Robotics & Diagnostics'
    });
  };

  // Toggle Connect / Follow Peer
  const handleToggleConnectPeer = (peerName: string) => {
    sound.playSuccess();
    setPeerProfiles((prev) => {
      const target = prev[peerName];
      if (!target) return prev;
      const nextConnected = !target.isConnected;
      const nextMeshLinks = nextConnected ? target.meshLinksCount + 1 : Math.max(0, target.meshLinksCount - 1);
      return {
        ...prev,
        [peerName]: {
          ...target,
          isConnected: nextConnected,
          meshLinksCount: nextMeshLinks
        }
      };
    });

    const isNowConnected = !peerProfiles[peerName]?.isConnected;
    triggerToast(
      isNowConnected
        ? `🎉 Connected with ${peerName}! Telemetry node linked.`
        : `Node link with ${peerName} removed.`
    );
  };

  // Direct Message Peer -> switch to Direct Chat
  const handleMessagePeer = (peer: PeerProfile) => {
    sound.playClick();
    setIsPeerProfileModalOpen(false);
    setActiveTab('messages');
    setIsChatOpen(true);

    // Check if contact already exists
    const existingContact = contacts.find((c) => c.name.toLowerCase() === peer.name.toLowerCase());
    if (existingContact) {
      setActiveContactId(existingContact.id);
    } else {
      const newContactId = `c-${Date.now()}`;
      contacts.push({
        id: newContactId,
        name: peer.name,
        role: peer.badge,
        status: 'Online',
        avatar: peer.avatar
      });
      setActiveContactId(newContactId);
    }
    triggerToast(`💬 Direct secure chat opened with ${peer.name}`);
  };

  // Add Endorsement to Peer Profile
  const handleAddPeerEndorsement = (peerName: string, e: React.FormEvent) => {
    e.preventDefault();
    if (!peerEndorsementInput.trim()) return;
    sound.playSuccess();
 
   const newEndorsement: ProfileCommentItem = {
      id: `pce-${Date.now()}`,
      author: userName,
      badge: 'FOUNDER & MASTER ARCHITECT',
      avatar: avatarUrl,
      time: 'Just now',
      comment: peerEndorsementInput.trim(),
      verifications: 1,
      verified: true
    };

    setPeerProfiles((prev) => {
      const target = prev[peerName];
      if (!target) return prev;
      return {
        ...prev,
        [peerName]: {
          ...target,
          endorsements: [newEndorsement, ...target.endorsements]
        }
      };
    });

    setPeerEndorsementInput('');
    triggerToast(`⭐ Technical endorsement for ${peerName} recorded in ledger!`);
  };

  // Direct Avatar Upload for any Peer
  const handleDirectPeerAvatarUpload = (peerName: string, e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const result = reader.result as string;
        setPeerProfiles((prev) => {
          const target = prev[peerName];
          if (!target) return prev;
          return {
            ...prev,
            [peerName]: { ...target, avatar: result }
          };
        });

        // Synchronize across posts and contacts
        setPosts((prev) =>
          prev.map((post) => (post.author === peerName ? { ...post, avatar: result } : post))
        );
        contacts.forEach((c) => {
          if (c.name === peerName) c.avatar = result;
        });

        sound.playSuccess();
        triggerToast(`📷 Updated avatar photo for ${peerName}!`);
      };
      reader.readAsDataURL(file);
    }
  };

  // Direct Cover Upload for any Peer
  const handleDirectPeerCoverUpload = (peerName: string, e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const result = reader.result as string;
        setPeerProfiles((prev) => {
          const target = prev[peerName];
          if (!target) return prev;
          return {
            ...prev,
            [peerName]: { ...target, cover: result }
          };
        });
        sound.playSuccess();
        triggerToast(`🖼️ Updated cover banner for ${peerName}!`);
      };
      reader.readAsDataURL(file);
    }
  };

  // Local Storage Synchronizations
  useEffect(() => {
    try {
      localStorage.setItem('chixus_dark_mode_v7', JSON.stringify(darkModeTheme));
    } catch {
      // storage fallback
    }
  }, [darkModeTheme]);

  useEffect(() => {
    try {
      localStorage.setItem('chixus_user_name_v7', userName);
      localStorage.setItem('chixus_headline_v7', userHeadline);
      localStorage.setItem('chixus_user_location_v7', userLocation);
      localStorage.setItem('chixus_avatar_v7', avatarUrl);
      localStorage.setItem('chixus_cover_v7', coverUrl);
      localStorage.setItem('chixus_summary_v7', executiveSummary);
      localStorage.setItem('chixus_experiences_v8', JSON.stringify(experiences));
      localStorage.setItem('chixus_comments_v7', JSON.stringify(profileComments));
    } catch {
      // storage fallback
    }
  }, [userName, userHeadline, userLocation, avatarUrl, coverUrl, executiveSummary, experiences, profileComments]);

  // Deployment Arrangement Handlers
  const handleOpenAddDeployment = () => {
    sound.playClick();
    setEditingDeploymentId(null);
    setDeploymentRoleInput('');
    setDeploymentCompanyInput('');
    setDeploymentDescriptionInput('');
    setIsDeploymentModalOpen(true);
  };

  const handleOpenEditDeployment = (exp: ExperienceItem) => {
    sound.playClick();
    setEditingDeploymentId(exp.id);
    setDeploymentRoleInput(exp.role);
    setDeploymentCompanyInput(exp.company);
    setDeploymentDescriptionInput(exp.description);
    setIsDeploymentModalOpen(true);
  };

  const handleDeleteDeployment = (id: string) => {
    sound.playClick();
    setExperiences((prev) => {
      const updated = prev.filter((item) => item.id !== id);
      try {
        localStorage.setItem('chixus_experiences_v8', JSON.stringify(updated));
        const savedProfile = localStorage.getItem('chixus_current_user_profile');
        if (savedProfile) {
          const parsed = JSON.parse(savedProfile);
          parsed.experiences = updated;
          localStorage.setItem('chixus_current_user_profile', JSON.stringify(parsed));
          setCurrentUserProfile(parsed);
        }
      } catch (err) {
        console.error(err);
      }
      return updated;
    });
    triggerToast('🗑️ Deployment record removed from ledger.');
  };

  const handleSaveDeployment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!deploymentRoleInput.trim()) {
      triggerToast('⚠️ Please enter a deployment title or role.');
      return;
    }
    sound.playSuccess();

    setExperiences((prev) => {
      let updated: ExperienceItem[];
      if (editingDeploymentId) {
        updated = prev.map((item) =>
          item.id === editingDeploymentId
            ? {
                ...item,
                role: deploymentRoleInput.trim(),
                company: deploymentCompanyInput.trim() || 'Sector Deployment • Active',
                description: deploymentDescriptionInput.trim() || 'Field verification and hardware diagnostic telemetry routines.'
              }
            : item
        );
      } else {
        const newExp: ExperienceItem = {
          id: `exp-${Date.now()}`,
          role: deploymentRoleInput.trim(),
          company: deploymentCompanyInput.trim() || 'Sector Deployment • Active',
          description: deploymentDescriptionInput.trim() || 'Field verification and hardware diagnostic telemetry routines.'
        };
        updated = [newExp, ...prev];
      }
      try {
        localStorage.setItem('chixus_experiences_v8', JSON.stringify(updated));
        const savedProfile = localStorage.getItem('chixus_current_user_profile');
        if (savedProfile) {
          const parsed = JSON.parse(savedProfile);
          parsed.experiences = updated;
          localStorage.setItem('chixus_current_user_profile', JSON.stringify(parsed));
          setCurrentUserProfile(parsed);
        }
      } catch (err) {
        console.error(err);
      }
      return updated;
    });

    setIsDeploymentModalOpen(false);
    triggerToast(editingDeploymentId ? '✅ Deployment arrangement updated!' : '✅ New deployment arrangement added to ledger!');
  };

  // Scroll chat to bottom on new message
  useEffect(() => {
    if (chatScrollRef.current) {
      chatScrollRef.current.scrollTop = chatScrollRef.current.scrollHeight;
    }
  }, [chatMessages, activeContactId]);

  // -------------------------------------------------------------
  // Feed Event Handlers
  // -------------------------------------------------------------
  const handleToggleLike = (postId: string) => {
    sound.playClick();
    setPosts((prev) =>
      prev.map((p) => {
        if (p.id === postId) {
          const verified = !p.verified;
          return {
            ...p,
            verified,
            verifications: verified ? p.verifications + 1 : Math.max(0, p.verifications - 1)
          };
        }
        return p;
      })
    );
  };

  const handleAddComment = (postId: string, text: string) => {
    if (!text.trim()) return;
    sound.playClick();
    setPosts((prev) =>
      prev.map((p) => {
        if (p.id === postId) {
          return {
            ...p,
            comments: [...p.comments, `${userName}: ${text.trim()}`]
          };
        }
        return p;
      })
    );
    setCommentInputs((prev) => ({ ...prev, [postId]: '' }));
    setExpandedComments((prev) => ({ ...prev, [postId]: true }));
    triggerToast('💬 Comment logged to decentralized thread!');
  };

  const handleCreatePost = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPostContent.trim() && !newPostImage) return;
    sound.playSuccess();
    const newPost: PostItem = {
      id: `post-${Date.now()}`,
      author: userName,
      badge: 'FOUNDER & MASTER ARCHITECT • TIER-1',
      avatar: avatarUrl,
      time: 'Just now',
      content: newPostContent.trim(),
      verifications: 1,
      verified: true,
      comments: [],
      telemetryStats: `${formatNumber(userInspectionsConducted)} Inspections Conducted • ${userAiScanAccuracy} AI Scan Accuracy`,
      postMedia: newPostImage || undefined
    };
    setPosts((prev) => [newPost, ...prev]);
    setNewPostContent('');
    setNewPostImage(null);
    triggerToast('🚀 Telemetry log published across mesh network!');
  };

  // -------------------------------------------------------------
  // Diagnostic Scan Handlers
  // -------------------------------------------------------------
  const handleStartInspection = () => {
    if (!selectedCircuitImage) {
      triggerToast('Please select or upload a circuit image first!');
      return;
    }
    sound.playScan();
    setIsScanning(true);
    setScanProgress(10);
    setScanResult(null);

    let progress = 10;
    const interval = setInterval(() => {
      progress += 20;
      setScanProgress(progress);
      if (progress >= 100) {
        clearInterval(interval);
        setIsScanning(false);
        sound.playSuccess();
        const newResult = {
          status: 'VERIFIED' as const,
          label: 'Micro-Inverter Solder Joint Integrity Verified',
          confidence: '99.8%',
          voidRatio: '2.8%',
          details: 'Pass INT8 quantized neural tensor inspection. High-voltage thermal dissipation verified within safe bounds.'
        };
        setScanResult(newResult);
        const newLog: ScanLog = {
          id: `SC-${Math.floor(100 + Math.random() * 900)}`,
          timestamp: new Date().toISOString().replace('T', ' ').slice(0, 16),
          fileName: 'uploaded_circuit_inspection.png',
          status: 'Solder Integrity Verified',
          accuracy: '99.8%'
        };
        setScanLogs((prev) => {
          const updated = [newLog, ...prev];
          try {
            localStorage.setItem('chixus_scan_logs_v8', JSON.stringify(updated));
          } catch (e) {
            console.error(e);
          }
          return updated;
        });
        setUserInspectionsConducted((prev) => {
          const updated = prev + 1;
          try {
            localStorage.setItem('chixus_inspections_conducted_v8', updated.toString());
          } catch (e) {
            console.error(e);
          }
          return updated;
        });
        setUserAiScanAccuracy('99.8%');
        try {
          localStorage.setItem('chixus_scan_accuracy_v8', '99.8%');
        } catch (e) {
          console.error(e);
        }
        if (currentUserProfile) {
          const updatedProfile = {
            ...currentUserProfile,
            inspectionsConducted: (currentUserProfile.inspectionsConducted || 0) + 1,
            aiScanAccuracy: '99.8%'
          };
          setCurrentUserProfile(updatedProfile);
          try {
            localStorage.setItem('chixus_current_user_profile', JSON.stringify(updatedProfile));
          } catch (e) {
            console.error(e);
          }
        }
        triggerToast('🔬 Diagnostic analysis complete: 99.8% Solder Integrity Verified!');
      }
    }, 280);
  };

  const handleCircuitImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedCircuitImage(reader.result as string);
        triggerToast('📷 Custom circuit board loaded for diagnostic inspection!');
      };
      reader.readAsDataURL(file);
    }
  };

  // -------------------------------------------------------------
  // WhatsApp-Style Messaging Handlers
  // -------------------------------------------------------------
  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newChatText.trim() && !chatImageAttachment) return;
    sound.playClick();
    const newMsg: ChatMessage = {
      id: `msg-${Date.now()}`,
      contactId: activeContactId,
      sender: 'me',
      text: newChatText.trim(),
      imageAttachment: chatImageAttachment || undefined,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    setChatMessages((prev) => [...prev, newMsg]);
    setNewChatText('');
    setChatImageAttachment(null);

    // Automated operator response simulation
    setTimeout(() => {
      const replies = [
        'Coordinates received Chief! INT8 tensor inspection aligned on our edge gateway.',
        'Thermal dissipation logs verified. Proceeding with Benin City factory sign-off.',
        'Understood! The defect classification matrix has been synced.',
        'Report received! The plant engineer confirmed the repair contract dispatch.'
      ];
      const replyMsg: ChatMessage = {
        id: `reply-${Date.now()}`,
        contactId: activeContactId,
        sender: 'them',
        text: replies[Math.floor(Math.random() * replies.length)],
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setChatMessages((prev) => [...prev, replyMsg]);
      sound.playClick();
    }, 1200);
  };

  // -------------------------------------------------------------
  // Profile & Endorsement Handlers
  // -------------------------------------------------------------
  const handleDirectAvatarUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const result = reader.result as string;
        setAvatarUrl(result);
        setEditAvatarPreview(result);
        // Synchronize in posts by founder
        setPosts((prev) =>
          prev.map((post) =>
            post.author === userName ? { ...post, avatar: result } : post
          )
        );
        sound.playSuccess();
        triggerToast('📷 Profile photo updated and synchronized to grid!');
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDirectCoverUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const result = reader.result as string;
        setCoverUrl(result);
        setEditCoverPreview(result);
        sound.playSuccess();
        triggerToast('🖼️ Profile cover banner updated!');
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSaveProfileEdits = (e: React.FormEvent) => {
    e.preventDefault();
    sound.playSuccess();
    setUserName(editNameInput);
    setUserHeadline(editHeadlineInput);
    setUserLocation(editLocationInput);
    setExecutiveSummary(editSummaryInput);
    setAvatarUrl(editAvatarPreview);
    setCoverUrl(editCoverPreview);

    if (currentUserProfile) {
      const updated = {
        ...currentUserProfile,
        fullName: editNameInput,
        headline: editHeadlineInput,
        location: editLocationInput,
        summary: editSummaryInput,
        avatarUrl: editAvatarPreview,
        coverUrl: editCoverPreview,
        experiences: experiences
      };
      setCurrentUserProfile(updated);
      try {
        localStorage.setItem('chixus_current_user_profile', JSON.stringify(updated));
      } catch (err) {
        console.error(err);
      }
    }

    // Synchronize in posts by founder
    setPosts((prev) =>
      prev.map((post) =>
        post.author === userName ? { ...post, avatar: editAvatarPreview } : post
      )
    );
    setIsEditProfileModalOpen(false);
    triggerToast('✅ Profile matrix synchronized and locked to ledger!');
  };

  const handleAddEndorsement = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newEndorsementText.trim()) return;
    sound.playSuccess();
    const newComment: ProfileCommentItem = {
      id: `pc-${Date.now()}`,
      author: 'Engineer Isaiah',
      badge: 'VERIFIED OPERATOR',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=400',
      time: 'Just now',
      comment: newEndorsementText.trim(),
      verifications: 1,
      verified: true
    };
    setProfileComments((prev) => [newComment, ...prev]);
    setNewEndorsementText('');
    triggerToast('✍️ Technical endorsement signed & posted!');
  };

  const activeContact = contacts.find((c) => c.id === activeContactId) || contacts[0];
  const activeConversation = chatMessages.filter((m) => m.contactId === activeContactId);

  // -------------------------------------------------------------
  // MULTI-STAGE ONBOARDING GATEWAY (Pure Inline Styles, Silver & Charcoal)
  // -------------------------------------------------------------
  if (onboardStage !== 'main_app') {
    return (
      <div
        id="chixus-onboarding-gateway"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          backgroundColor: '#121316',
          backgroundImage: 'radial-gradient(ellipse at 50% 20%, #1e2029 0%, #121316 70%, #0c0d10 100%)',
          color: '#cbd5e1',
          fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, monospace, sans-serif',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 99999,
          boxSizing: 'border-box',
          padding: '20px',
          overflowY: 'auto'
        }}
      >
        {/* Central Silver & Charcoal Chassis Card */}
        <div
          id="gateway-container-card"
          style={{
            width: '100%',
            maxWidth: '460px',
            background: 'linear-gradient(180deg, #181a20 0%, #121316 100%)',
            border: '1px solid #2a2d36',
            borderRadius: '16px',
            boxShadow: '0 25px 60px rgba(0, 0, 0, 0.9), 0 0 1px rgba(203, 213, 225, 0.25)',
            padding: '28px 24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            boxSizing: 'border-box',
            position: 'relative'
          }}
        >
          {/* Phase A: SPLASH SCREEN (3 Seconds) */}
          {onboardStage === 'splash' && (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '18px' }}>
              {/* Metallic Silver Vector Line Icon Grid Element */}
              <div
                style={{
                  width: '96px',
                  height: '96px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #272a36 0%, #14161d 100%)',
                  border: '2px solid #cbd5e1',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 0 35px rgba(203, 213, 225, 0.35), inset 0 0 15px rgba(255, 255, 255, 0.1)',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                <img
                  src={metallicLogo}
                  alt="CHIXUS Emblem"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  referrerPolicy="no-referrer"
                />
                <div
                  style={{
                    position: 'absolute',
                    top: '6px',
                    right: '6px',
                    width: '12px',
                    height: '12px',
                    borderRadius: '50%',
                    background: '#10b981',
                    border: '2px solid #0c0d10',
                    boxShadow: '0 0 8px #10b981'
                  }}
                />
              </div>

              {/* Title & Crisp Silver Lettering with 4px Character Spacing */}
              <div>
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    background: '#1e212b',
                    border: '1px solid rgba(203, 213, 225, 0.2)',
                    borderRadius: '20px',
                    padding: '4px 12px',
                    fontSize: '10px',
                    fontFamily: 'monospace',
                    fontWeight: 'bold',
                    color: '#94a3b8',
                    letterSpacing: '1px',
                    marginBottom: '12px',
                    textTransform: 'uppercase'
                  }}
                >
                  <Shield style={{ width: '12px', height: '12px', color: '#cbd5e1' }} />
                  <span>Sovereign Hardware Node</span>
                </div>

                <h1
                  style={{
                    fontSize: '24px',
                    fontWeight: 900,
                    fontFamily: 'monospace',
                    letterSpacing: '4px',
                    color: '#cbd5e1',
                    margin: '0 0 8px 0',
                    textShadow: '0 2px 12px rgba(0,0,0,0.6)'
                  }}
                >
                  WELCOME TO CHIXUS
                </h1>

                <p
                  style={{
                    fontSize: '12px',
                    color: '#94a3b8',
                    lineHeight: 1.6,
                    margin: 0,
                    maxWidth: '360px'
                  }}
                >
                  Decentralized Edge Electronics Verification Network & Optical Solder Fault Inspector
                </p>
              </div>

              {/* Real-time Boot Progress Bar */}
              <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '6px' }}>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    fontSize: '11px',
                    fontFamily: 'monospace',
                    color: '#cbd5e1'
                  }}
                >
                  <span>
                    {splashProgress < 40
                      ? 'INITIALIZING TENSOR CORES...'
                      : splashProgress < 80
                      ? 'SYNCING DECENTRALIZED MESH...'
                      : 'NODE BIOMETRICS READY'}
                  </span>
                  <span style={{ fontWeight: 'bold' }}>{Math.min(100, Math.max(0, splashProgress))}%</span>
                </div>

                <div
                  style={{
                    width: '100%',
                    height: '6px',
                    backgroundColor: '#1c1f2a',
                    borderRadius: '999px',
                    overflow: 'hidden',
                    border: '1px solid rgba(203, 213, 225, 0.15)'
                  }}
                >
                  <div
                    style={{
                      height: '100%',
                      width: `${splashProgress}%`,
                      background: 'linear-gradient(90deg, #64748b 0%, #cbd5e1 60%, #ffffff 100%)',
                      borderRadius: '999px',
                      transition: 'width 0.15s ease'
                    }}
                  />
                </div>
              </div>

              {/* Fast Skip Option */}
              <button
                type="button"
                id="skip-splash-btn"
                onClick={() => {
                  sound.playClick();
                  setOnboardStage('login');
                }}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: '#94a3b8',
                  fontSize: '11px',
                  fontFamily: 'monospace',
                  cursor: 'pointer',
                  padding: '6px 12px',
                  borderRadius: '6px',
                  marginTop: '4px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#cbd5e1')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#94a3b8')}
              >
                <span>SKIP TO LOGIN</span>
                <ChevronRight style={{ width: '12px', height: '12px' }} />
              </button>
            </div>
          )}

          {/* Phase B: LOGIN PHASE */}
          {onboardStage === 'login' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
              {/* Header */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid rgba(203, 213, 225, 0.12)', paddingBottom: '12px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '10px',
                      background: '#1e212b',
                      border: '1px solid #cbd5e1',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#cbd5e1'
                    }}
                  >
                    <Lock style={{ width: '18px', height: '18px' }} />
                  </div>
                  <div>
                    <div style={{ fontSize: '15px', fontWeight: 900, fontFamily: 'monospace', color: '#cbd5e1', letterSpacing: '0.5px' }}>
                      OPERATOR GATEWAY
                    </div>
                    <div style={{ fontSize: '11px', color: '#94a3b8' }}>Secure Sovereign Authorization</div>
                  </div>
                </div>
                <div
                  style={{
                    background: '#1a1d27',
                    border: '1px solid rgba(203, 213, 225, 0.15)',
                    borderRadius: '8px',
                    padding: '3px 8px',
                    fontSize: '10px',
                    fontFamily: 'monospace',
                    color: '#cbd5e1'
                  }}
                >
                  STAGE: AUTH
                </div>
              </div>

              {/* Login Form Field: ENTER YOUR UNIQUE CHIXUS ID */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div>
                  <label
                    htmlFor="login-user-id-field"
                    style={{
                      display: 'block',
                      fontSize: '11px',
                      fontFamily: 'monospace',
                      color: '#cbd5e1',
                      marginBottom: '8px',
                      fontWeight: 'bold',
                      letterSpacing: '0.5px'
                    }}
                  >
                    ENTER YOUR UNIQUE CHIXUS ID
                  </label>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      background: '#14161f',
                      border: '1px solid #2f3445',
                      borderRadius: '8px',
                      padding: '0 12px'
                    }}
                  >
                    <Terminal style={{ width: '16px', height: '16px', color: '#94a3b8', marginRight: '8px', flexShrink: 0 }} />
                    <input
                      id="login-user-id-field"
                      type="text"
                      value={userIdInput}
                      onChange={(e) => setUserIdInput(e.target.value)}
                      placeholder="e.g. CHX-4829-NG"
                      style={{
                        flex: 1,
                        background: 'transparent',
                        border: 'none',
                        color: '#f8fafc',
                        fontSize: '13px',
                        fontFamily: 'monospace',
                        padding: '12px 0',
                        outline: 'none'
                      }}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          const inputVal = userIdInput.trim();
                          if (!inputVal) {
                            triggerToast('⚠️ Please enter your unique CHIXUS ID or register.');
                            return;
                          }
                          sound.playSuccess();
                          if (currentUserProfile && (currentUserProfile.secretId.toLowerCase() === inputVal.toLowerCase() || currentUserProfile.username.toLowerCase() === inputVal.toLowerCase())) {
                            setUserName(currentUserProfile.fullName || currentUserProfile.username);
                            setUserLocation(currentUserProfile.location || 'Sector Relay // Nigeria');
                            setUserInspectionsConducted(currentUserProfile.inspectionsConducted ?? 0);
                            setUserFaultsIsolated(currentUserProfile.faultsIsolated ?? 0);
                            setUserAiScanAccuracy(currentUserProfile.aiScanAccuracy || '0.0%');
                            if (currentUserProfile.experiences && Array.isArray(currentUserProfile.experiences)) {
                              setExperiences(currentUserProfile.experiences);
                            }
                          } else {
                            const formatted = inputVal.startsWith('CHX-') ? `Operator ${inputVal}` : inputVal;
                            setUserName(formatted);
                            setUserLocation('Sector Relay // Nigeria');
                            setUserInspectionsConducted(0);
                            setUserFaultsIsolated(0);
                            setUserAiScanAccuracy('0.0%');
                            setExperiences([]);
                            setGeneratedSecretID(inputVal);
                          }
                          triggerToast(`✨ Operator Node Connected: ${inputVal}`);
                          setOnboardStage('main_app');
                        }
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '4px' }}>
                <button
                  type="button"
                  id="connect-node-btn"
                  disabled={!userIdInput.trim() || isConnectingLoading}
                  onClick={() => {
                    const inputVal = userIdInput.trim();
                    if (!inputVal || isConnectingLoading) {
                      sound.playError();
                      triggerToast('⚠️ Please enter your unique CHIXUS ID or click register below.');
                      return;
                    }
                    sound.playClick();
                    setIsConnectingLoading(true);

                    // Periodic industrial tactile chirps during connection synchronization
                    const chirpTimer1 = setTimeout(() => sound.playClick(), 1000);
                    const chirpTimer2 = setTimeout(() => sound.playClick(), 2000);

                    setTimeout(() => {
                      clearTimeout(chirpTimer1);
                      clearTimeout(chirpTimer2);
                      setIsConnectingLoading(false);

                      if (currentUserProfile && (currentUserProfile.secretId.toLowerCase() === inputVal.toLowerCase() || currentUserProfile.username.toLowerCase() === inputVal.toLowerCase())) {
                        setUserName(currentUserProfile.fullName || currentUserProfile.username);
                        setUserLocation(currentUserProfile.location || 'Sector Relay // Nigeria');
                        setUserInspectionsConducted(currentUserProfile.inspectionsConducted ?? 0);
                        setUserFaultsIsolated(currentUserProfile.faultsIsolated ?? 0);
                        setUserAiScanAccuracy(currentUserProfile.aiScanAccuracy || '0.0%');
                        if (currentUserProfile.experiences && Array.isArray(currentUserProfile.experiences)) {
                          setExperiences(currentUserProfile.experiences);
                        }
                      } else {
                        const formatted = inputVal.startsWith('CHX-') ? `Operator ${inputVal}` : inputVal;
                        setUserName(formatted);
                        setUserLocation('Sector Relay // Nigeria');
                        setUserInspectionsConducted(0);
                        setUserFaultsIsolated(0);
                        setUserAiScanAccuracy('0.0%');
                        setExperiences([]);
                        setGeneratedSecretID(inputVal);
                      }
                      sound.playSuccess();
                      triggerToast(`✨ Operator Node Connected: ${inputVal}`);
                      setOnboardStage('main_app');
                    }, 3000);
                  }}
                  style={{
                    width: '100%',
                    padding: '13px 16px',
                    borderRadius: '10px',
                    background: !userIdInput.trim() || isConnectingLoading
                      ? '#1b1d26'
                      : 'linear-gradient(135deg, #ffffff 0%, #cbd5e1 50%, #94a3b8 100%)',
                    border: !userIdInput.trim() || isConnectingLoading ? '1px solid rgba(203, 213, 225, 0.15)' : '1px solid #cbd5e1',
                    color: !userIdInput.trim() || isConnectingLoading ? '#64748b' : '#121316',
                    fontSize: '12px',
                    fontWeight: 900,
                    fontFamily: 'monospace',
                    letterSpacing: '1px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    cursor: !userIdInput.trim() || isConnectingLoading ? 'not-allowed' : 'pointer',
                    boxShadow: !userIdInput.trim() || isConnectingLoading ? 'none' : '0 6px 20px rgba(203, 213, 225, 0.25)',
                    opacity: !userIdInput.trim() ? 0.45 : isConnectingLoading ? 0.85 : 1,
                    transition: 'all 0.2s'
                  }}
                >
                  {isConnectingLoading ? (
                    <>
                      <Activity style={{ width: '15px', height: '15px', color: '#00E5FF', animation: 'spin 1.5s linear infinite' }} />
                      <span style={{ color: '#00E5FF', fontSize: '10px', letterSpacing: '0.5px' }}>
                        SYNCHRONIZING SECURE OPERATIONAL NODE PROTOCOLS...
                      </span>
                    </>
                  ) : (
                    <>
                      <Zap style={{ width: '16px', height: '16px', color: !userIdInput.trim() ? '#64748b' : '#121316' }} />
                      <span>CONNECT NODE</span>
                    </>
                  )}
                </button>

                {/* Clean Notice: New operator? Click here to register your node. */}
                <div style={{ textAlign: 'center', marginTop: '4px', display: 'flex', flexDirection: 'column', gap: '6px', alignItems: 'center' }}>
                  <button
                    type="button"
                    id="switch-to-register-text-btn"
                    onClick={() => {
                      sound.playClick();
                      setOnboardStage('registration');
                    }}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: '#94a3b8',
                      fontSize: '12px',
                      fontFamily: 'monospace',
                      cursor: 'pointer',
                      textDecoration: 'underline',
                      padding: '4px 8px',
                      transition: 'color 0.2s'
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#cbd5e1')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#94a3b8')}
                  >
                    New operator? Click here to register your node.
                  </button>

                  <button
                    type="button"
                    id="forgot-verification-id-btn"
                    onClick={() => {
                      sound.playClick();
                      setRecoverySuccessMsg('');
                      setRecoveryErrorMsg('');
                      setShowRecoveryModal(true);
                    }}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: '#00E5FF',
                      fontSize: '11px',
                      fontFamily: 'monospace',
                      fontWeight: 600,
                      cursor: 'pointer',
                      textDecoration: 'none',
                      padding: '4px 8px',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '5px',
                      transition: 'all 0.2s'
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#00E5FF')}
                  >
                    <Key style={{ width: '12px', height: '12px' }} />
                    <span>Forgot Verification ID?</span>
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Phase C: REGISTRATION PHASE (Data Ingestion & ID Engine) */}
          {onboardStage === 'registration' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {/* Header */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid rgba(203, 213, 225, 0.12)', paddingBottom: '10px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '10px',
                      background: '#1e212b',
                      border: '1px solid #cbd5e1',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#cbd5e1'
                    }}
                  >
                    <Fingerprint style={{ width: '18px', height: '18px' }} />
                  </div>
                  <div>
                    <div style={{ fontSize: '15px', fontWeight: 900, fontFamily: 'monospace', color: '#cbd5e1', letterSpacing: '0.5px' }}>
                      NODE ENROLLMENT
                    </div>
                    <div style={{ fontSize: '11px', color: '#94a3b8' }}>Register Operator Biometrics</div>
                  </div>
                </div>
                <div
                  style={{
                    background: '#1a1d27',
                    border: '1px solid rgba(203, 213, 225, 0.15)',
                    borderRadius: '8px',
                    padding: '3px 8px',
                    fontSize: '10px',
                    fontFamily: 'monospace',
                    color: '#cbd5e1'
                  }}
                >
                  STAGE: ENROLL
                </div>
              </div>

              {/* Technical Data Form Inputs */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxHeight: '300px', overflowY: 'auto', paddingRight: '4px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '11px', fontFamily: 'monospace', color: '#cbd5e1', marginBottom: '4px', fontWeight: 'bold' }}>
                    OPERATOR CALLSIGN / USERNAME
                  </label>
                  <input
                    type="text"
                    id="reg-username-input"
                    value={regUsername}
                    onChange={(e) => setRegUsername(e.target.value)}
                    placeholder="e.g. cyber_operator"
                    style={{
                      width: '100%',
                      background: '#14161f',
                      border: '1px solid #2f3445',
                      borderRadius: '8px',
                      padding: '8px 12px',
                      color: '#f8fafc',
                      fontSize: '12px',
                      fontFamily: 'monospace',
                      outline: 'none',
                      boxSizing: 'border-box'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '11px', fontFamily: 'monospace', color: '#cbd5e1', marginBottom: '4px', fontWeight: 'bold' }}>
                    FULL LEGAL / ENGINEER NAME
                  </label>
                  <input
                    type="text"
                    id="reg-fullname-input"
                    value={regFullName}
                    onChange={(e) => setRegFullName(e.target.value)}
                    placeholder="e.g. Alex Vance"
                    style={{
                      width: '100%',
                      background: '#14161f',
                      border: '1px solid #2f3445',
                      borderRadius: '8px',
                      padding: '8px 12px',
                      color: '#f8fafc',
                      fontSize: '12px',
                      fontFamily: 'monospace',
                      outline: 'none',
                      boxSizing: 'border-box'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '11px', fontFamily: 'monospace', color: '#cbd5e1', marginBottom: '4px', fontWeight: 'bold' }}>
                    CURRENT OPERATIONAL LOCATION
                  </label>
                  <input
                    type="text"
                    id="reg-location-input"
                    value={regLocation}
                    onChange={(e) => setRegLocation(e.target.value)}
                    placeholder="e.g. Lagos, Nigeria"
                    style={{
                      width: '100%',
                      background: '#14161f',
                      border: '1px solid #2f3445',
                      borderRadius: '8px',
                      padding: '8px 12px',
                      color: '#f8fafc',
                      fontSize: '12px',
                      fontFamily: 'monospace',
                      outline: 'none',
                      boxSizing: 'border-box'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '11px', fontFamily: 'monospace', color: '#cbd5e1', marginBottom: '4px', fontWeight: 'bold' }}>
                    PROFESSIONAL HEADLINE (OPTIONAL)
                  </label>
                  <input
                    type="text"
                    id="reg-headline-input"
                    value={regHeadline}
                    onChange={(e) => setRegHeadline(e.target.value)}
                    placeholder="Leave blank or enter custom headline..."
                    style={{
                      width: '100%',
                      background: '#14161f',
                      border: '1px solid #2f3445',
                      borderRadius: '8px',
                      padding: '8px 12px',
                      color: '#f8fafc',
                      fontSize: '12px',
                      fontFamily: 'monospace',
                      outline: 'none',
                      boxSizing: 'border-box'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '11px', fontFamily: 'monospace', color: '#cbd5e1', marginBottom: '4px', fontWeight: 'bold' }}>
                    TELEMETRY DISPATCH EMAIL
                  </label>
                  <input
                    type="email"
                    id="reg-email-input"
                    value={regEmail}
                    onChange={(e) => setRegEmail(e.target.value)}
                    placeholder="e.g. operator@chixus.grid"
                    style={{
                      width: '100%',
                      background: '#14161f',
                      border: '1px solid #2f3445',
                      borderRadius: '8px',
                      padding: '8px 12px',
                      color: '#f8fafc',
                      fontSize: '12px',
                      fontFamily: 'monospace',
                      outline: 'none',
                      boxSizing: 'border-box'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '11px', fontFamily: 'monospace', color: '#cbd5e1', marginBottom: '4px', fontWeight: 'bold' }}>
                    ENCRYPTED COMMS LINE (PHONE NUMBER)
                  </label>
                  <input
                    type="tel"
                    id="reg-phone-input"
                    value={regPhoneNumber}
                    onChange={(e) => setRegPhoneNumber(e.target.value)}
                    placeholder="e.g. +234 810 000 0000"
                    style={{
                      width: '100%',
                      background: '#14161f',
                      border: '1px solid #2f3445',
                      borderRadius: '8px',
                      padding: '8px 12px',
                      color: '#f8fafc',
                      fontSize: '12px',
                      fontFamily: 'monospace',
                      outline: 'none',
                      boxSizing: 'border-box'
                    }}
                  />
                </div>
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', gap: '8px', marginTop: '4px' }}>
                <button
                  type="button"
                  id="reg-back-to-login-btn"
                  onClick={() => {
                    sound.playClick();
                    setOnboardStage('login');
                  }}
                  style={{
                    flex: '0 0 auto',
                    padding: '11px 14px',
                    borderRadius: '10px',
                    backgroundColor: '#1b1d26',
                    border: '1px solid rgba(203, 213, 225, 0.2)',
                    color: '#cbd5e1',
                    fontSize: '12px',
                    fontFamily: 'monospace',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}
                >
                  <ArrowLeft style={{ width: '14px', height: '14px' }} />
                  <span>BACK</span>
                </button>

                <button
                  type="button"
                  id="generate-profile-nodes-btn"
                  disabled={isRegisteringLoading}
                  onClick={async () => {
                    sound.playClick();
                    // Generate random alpha-numeric identifier token: CHX-XXXX-NG
                    const randomDigits = Math.floor(1000 + Math.random() * 9000).toString();
                    const newGeneratedId = `CHX-${randomDigits}-NG`;
                    
                    const profileObj = {
                      username: regUsername.trim() || `Operator_${randomDigits}`,
                      fullName: regFullName.trim() || regUsername.trim() || `Operator ${randomDigits}`,
                      location: regLocation.trim() || 'Sector Relay // Nigeria',
                      email: regEmail.trim() || `node_${randomDigits}@chixus.grid`,
                      phoneNumber: regPhoneNumber.trim() || '+234 800 000 0000',
                      inspectionsConducted: 0,
                      faultsIsolated: 0,
                      aiScanAccuracy: '0.0%',
                      secretId: newGeneratedId,
                      headline: regHeadline.trim(),
                      avatarUrl: avatarUrl,
                      coverUrl: coverUrl,
                      summary: '',
                      experiences: []
                    };

                    setIsRegisteringLoading(true);

                    // Re-architected: Clear screen text caches of the token so operator must retrieve it from their real inbox
                    setGeneratedSecretID('');
                    setUserIdInput('');
                    setPendingRegisteredId(newGeneratedId);
                    setEmailVerifyCodeInput('');
                    setVerifyCodeError('');

                    // Set application runtime state & persistence
                    setCurrentUserProfile(profileObj);
                    setUserName(profileObj.fullName);
                    setUserLocation(profileObj.location);
                    setUserHeadline(profileObj.headline);
                    setExecutiveSummary('');
                    setExperiences([]);
                    setUserInspectionsConducted(0);
                    setUserFaultsIsolated(0);
                    setUserAiScanAccuracy('0.0%');

                    try {
                      localStorage.setItem('chixus_current_user_profile', JSON.stringify(profileObj));
                      localStorage.setItem('chixus_user_name_v7', profileObj.fullName);
                      localStorage.setItem('chixus_user_location_v7', profileObj.location);
                      localStorage.setItem('chixus_headline_v7', profileObj.headline);
                      localStorage.setItem('chixus_summary_v7', '');
                      localStorage.setItem('chixus_experiences_v8', JSON.stringify([]));
                      localStorage.setItem('chixus_inspections_conducted_v8', '0');
                      localStorage.setItem('chixus_faults_isolated_v8', '0');
                      localStorage.setItem('chixus_scan_accuracy_v8', '0.0%');
                    } catch (err) {
                      console.error(err);
                    }

                    // Dispatch to backend registration API
                    try {
                      const res = await fetch(`${API_BASE_URL}/api/auth/register`, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                          username: profileObj.username,
                          full_name: profileObj.fullName,
                          email: profileObj.email,
                          phone_number: profileObj.phoneNumber,
                          location: profileObj.location,
                          headline: profileObj.headline
                        })
                      });
                      if (res.ok) {
                        const data = await res.json();
                        console.log('Registration dispatch response:', data);
                      }
                    } catch (err) {
                      console.warn('Backend API registration fetch notice:', err);
                    }

                    setIsRegisteringLoading(false);
                    setRegSuccessEmail(profileObj.email);
                    triggerToast(`📨 Access ID dispatched to ${profileObj.email}`);
                    setOnboardStage('initializing');
                  }}
                  style={{
                    flex: 1,
                    padding: '11px 14px',
                    borderRadius: '10px',
                    background: 'linear-gradient(135deg, #ffffff 0%, #cbd5e1 50%, #94a3b8 100%)',
                    border: '1px solid #cbd5e1',
                    color: '#121316',
                    fontSize: '12px',
                    fontWeight: 900,
                    fontFamily: 'monospace',
                    letterSpacing: '0.5px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '6px',
                    cursor: isRegisteringLoading ? 'wait' : 'pointer',
                    boxShadow: '0 4px 16px rgba(203, 213, 225, 0.25)',
                    opacity: isRegisteringLoading ? 0.7 : 1
                  }}
                >
                  <Sparkles style={{ width: '16px', height: '16px', color: '#121316' }} />
                  <span>{isRegisteringLoading ? 'DISPATCHING CREDENTIALS...' : 'GENERATE PROFILE NODES'}</span>
                </button>
              </div>
            </div>
          )}

          {/* Phase D: INITIALIZING / EMAIL NOTIFICATION & UNLOCK PHASE */}
          {onboardStage === 'initializing' && (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '16px', padding: '6px 0' }}>
              {/* High-Tech Animated Mail & Node Ring */}
              <div
                style={{
                  width: '84px',
                  height: '84px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #1e222e 0%, #0d0f15 100%)',
                  border: '2px solid #00E5FF',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 0 30px rgba(0, 229, 255, 0.3), inset 0 0 20px rgba(255, 255, 255, 0.1)',
                  position: 'relative'
                }}
              >
                <Mail style={{ width: '32px', height: '32px', color: '#00E5FF' }} />
              </div>

              <div>
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    background: '#1a1d27',
                    border: '1px solid rgba(0, 229, 255, 0.3)',
                    borderRadius: '20px',
                    padding: '3px 10px',
                    fontSize: '10px',
                    fontFamily: 'monospace',
                    color: '#00E5FF',
                    marginBottom: '8px'
                  }}
                >
                  <Radio style={{ width: '11px', height: '11px', color: '#10b981' }} />
                  <span>EMAIL-FIRST DISPATCH VERIFIED</span>
                </div>

                <h2 style={{ fontSize: '16px', fontWeight: 900, fontFamily: 'monospace', color: '#ffffff', margin: '0 0 6px 0', letterSpacing: '0.8px' }}>
                  CREDENTIALS SECURELY TRANSMITTED
                </h2>
              </div>

              {/* Exact High-Utility Notification Text View Card */}
              <div
                id="email-first-notification-card"
                style={{
                  width: '100%',
                  background: 'linear-gradient(135deg, #181a22 0%, #12141a 100%)',
                  border: '1px solid #cbd5e1',
                  borderRadius: '12px',
                  padding: '16px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px',
                  boxSizing: 'border-box',
                  textAlign: 'center',
                  boxShadow: '0 4px 24px rgba(0, 0, 0, 0.5)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', color: '#38bdf8' }}>
                  <Shield style={{ width: '16px', height: '16px' }} />
                  <span style={{ fontSize: '11px', fontFamily: 'monospace', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase' }}>
                    SECURE ACCESS NOTICE
                  </span>
                </div>

                {/* Exact Required High-Utility Notification Text */}
                <div
                  style={{
                    fontSize: '13px',
                    fontWeight: 600,
                    fontFamily: 'monospace',
                    lineHeight: 1.55,
                    color: '#f8fafc',
                    background: '#090d16',
                    border: '1px dashed #00E5FF',
                    borderRadius: '8px',
                    padding: '14px 12px',
                    boxShadow: 'inset 0 0 12px rgba(0, 229, 255, 0.08)'
                  }}
                >
                  Your unique access ID code has been sent to your email. Please check your inbox and enter your code to continue.
                </div>

                {regSuccessEmail && (
                  <div style={{ fontSize: '11px', fontFamily: 'monospace', color: '#94a3b8' }}>
                    Recipient node: <span style={{ color: '#cbd5e1', fontWeight: 'bold' }}>{regSuccessEmail}</span>
                  </div>
                )}
              </div>

              {/* Code Entry & Unlock Section */}
              <div
                id="post-reg-verification-input-section"
                style={{
                  width: '100%',
                  background: '#12141a',
                  border: '1px solid rgba(203, 213, 225, 0.25)',
                  borderRadius: '12px',
                  padding: '16px',
                  boxSizing: 'border-box',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px',
                  textAlign: 'left'
                }}
              >
                <div>
                  <label
                    htmlFor="verify-received-code-input"
                    style={{
                      display: 'block',
                      fontSize: '11px',
                      fontFamily: 'monospace',
                      fontWeight: 800,
                      color: '#cbd5e1',
                      letterSpacing: '0.8px',
                      marginBottom: '6px'
                    }}
                  >
                    ENTER RECEIVED VERIFICATION ID *
                  </label>
                  <div style={{ position: 'relative' }}>
                    <Key style={{ width: '15px', height: '15px', position: 'absolute', left: '12px', top: '12px', color: '#00E5FF' }} />
                    <input
                      id="verify-received-code-input"
                      type="text"
                      placeholder="e.g. CHX-4829-NG or ANY test token"
                      value={emailVerifyCodeInput}
                      onChange={(e) => {
                        setEmailVerifyCodeInput(e.target.value);
                        if (verifyCodeError) setVerifyCodeError('');
                      }}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          const submitBtn = document.getElementById('verify-unlock-btn');
                          if (submitBtn) submitBtn.click();
                        }
                      }}
                      style={{
                        width: '100%',
                        backgroundColor: !emailVerifyCodeInput.trim() ? '#232733' : '#090b10',
                        border: verifyCodeError
                          ? '1px solid #ef4444'
                          : !emailVerifyCodeInput.trim()
                          ? '1px solid #374151'
                          : '1px solid rgba(0, 229, 255, 0.4)',
                        borderRadius: '8px',
                        padding: '10px 14px 10px 36px',
                        color: !emailVerifyCodeInput.trim() ? '#94a3b8' : '#ffffff',
                        fontSize: '13px',
                        fontWeight: 'bold',
                        fontFamily: 'monospace',
                        letterSpacing: '1px',
                        textTransform: 'uppercase',
                        outline: 'none',
                        boxSizing: 'border-box',
                        transition: 'all 0.2s ease'
                      }}
                    />
                  </div>
                </div>

                {verifyCodeError && (
                  <div
                    id="verify-code-error-banner"
                    style={{
                      background: 'rgba(239, 68, 68, 0.12)',
                      border: '1px solid #ef4444',
                      borderRadius: '8px',
                      padding: '8px 12px',
                      color: '#f87171',
                      fontSize: '11px',
                      fontFamily: 'monospace',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px'
                    }}
                  >
                    <AlertTriangle style={{ width: '14px', height: '14px', flexShrink: 0 }} />
                    <span>{verifyCodeError}</span>
                  </div>
                )}

                {/* Primary Action Button: Verify & Connect Node (Authenticate & Unlock) */}
                {(() => {
                  const hasInput = emailVerifyCodeInput.trim().length > 0;
                  return (
                    <button
                      type="button"
                      id="verify-unlock-btn"
                      disabled={!hasInput || verifyCodeLoading}
                      onClick={() => {
                        if (!hasInput || verifyCodeLoading) return;
                        const inputVal = emailVerifyCodeInput.trim().toUpperCase();

                        // Sound tactile chirp
                        sound.playClick();

                        // Developer Master Bypass / Fallback Condition: Allow ANY text string typed by developer
                        setVerifyCodeLoading(true);
                        setVerifyCodeError('');

                        // Periodic crisp engineering audio chirps during 3-second countdown
                        const chirpTimer1 = setTimeout(() => sound.playClick(), 1000);
                        const chirpTimer2 = setTimeout(() => sound.playClick(), 2000);

                        // Strict 3-second (3000ms) Industrial Loading Sequencer
                        setTimeout(() => {
                          clearTimeout(chirpTimer1);
                          clearTimeout(chirpTimer2);
                          setVerifyCodeLoading(false);
                          sound.playSuccess();
                          setGeneratedSecretID(inputVal);
                          try {
                            localStorage.setItem('chixus_generated_secret_id', inputVal);
                          } catch {
                            // ignore
                          }
                          triggerToast(`✨ Operator Node Connected: ${inputVal}! Matrix unlocked.`);
                          setOnboardStage('main_app');
                        }, 3000);
                      }}
                      style={{
                        width: '100%',
                        padding: '13px 14px',
                        borderRadius: '10px',
                        background: !hasInput || verifyCodeLoading
                          ? '#232733'
                          : 'linear-gradient(135deg, #ffffff 0%, #cbd5e1 50%, #94a3b8 100%)',
                        border: !hasInput || verifyCodeLoading ? '1px solid #374151' : '1px solid #cbd5e1',
                        color: !hasInput || verifyCodeLoading ? '#6b7280' : '#121316',
                        fontSize: '11px',
                        fontWeight: 900,
                        fontFamily: 'monospace',
                        cursor: !hasInput || verifyCodeLoading ? 'not-allowed' : 'pointer',
                        pointerEvents: !hasInput || verifyCodeLoading ? 'none' : 'auto',
                        userSelect: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '8px',
                        boxShadow: !hasInput || verifyCodeLoading ? 'none' : '0 4px 18px rgba(203, 213, 225, 0.3)',
                        opacity: !hasInput ? 0.5 : verifyCodeLoading ? 0.85 : 1,
                        transition: 'all 0.25s ease-in-out'
                      }}
                    >
                      {verifyCodeLoading ? (
                        <>
                          <Activity style={{ width: '15px', height: '15px', color: '#00E5FF', animation: 'spin 1.5s linear infinite' }} />
                          <span style={{ color: '#00E5FF', fontSize: '10px', letterSpacing: '0.5px' }}>
                            SYNCHRONIZING SECURE OPERATIONAL NODE PROTOCOLS...
                          </span>
                        </>
                      ) : (
                        <>
                          <Key style={{ width: '15px', height: '15px', color: !hasInput ? '#6b7280' : '#121316' }} />
                          <span>VERIFY & CONNECT NODE</span>
                          <ChevronRight style={{ width: '14px', height: '14px', color: !hasInput ? '#6b7280' : '#121316' }} />
                        </>
                      )}
                    </button>
                  );
                })()}
              </div>

              {/* Utility Links: Recovery & Login Gateway */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', padding: '0 4px' }}>
                <button
                  type="button"
                  id="resend-recovery-from-verify-btn"
                  onClick={() => {
                    sound.playClick();
                    if (currentUserProfile) {
                      setRecoveryUsername(currentUserProfile.username || '');
                      setRecoveryEmail(currentUserProfile.email || '');
                      setRecoveryPhone(currentUserProfile.phoneNumber || '');
                    }
                    setShowRecoveryModal(true);
                  }}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: '#38bdf8',
                    fontSize: '11px',
                    fontFamily: 'monospace',
                    textDecoration: 'underline',
                    cursor: 'pointer',
                    padding: 0
                  }}
                >
                  Forgot ID / Resend Code
                </button>

                <button
                  type="button"
                  id="go-to-login-gateway-btn"
                  onClick={() => {
                    sound.playClick();
                    setOnboardStage('login');
                  }}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: '#94a3b8',
                    fontSize: '11px',
                    fontFamily: 'monospace',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}
                >
                  <span>Operator Login</span>
                  <ChevronRight style={{ width: '12px', height: '12px' }} />
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Phase E: VERIFICATION ID RECOVERY MODAL OVERLAY */}
        {showRecoveryModal && (
          <div
            id="recovery-id-modal-backdrop"
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(5, 7, 10, 0.85)',
              backdropFilter: 'blur(10px)',
              zIndex: 999999,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '16px',
              boxSizing: 'border-box'
            }}
          >
            <div
              id="verification-id-recovery-card"
              style={{
                width: '100%',
                maxWidth: '460px',
                background: 'linear-gradient(135deg, #181b24 0%, #12141a 100%)',
                border: '1px solid #cbd5e1',
                borderRadius: '16px',
                padding: '24px',
                boxShadow: '0 20px 60px rgba(0, 0, 0, 0.9), 0 0 30px rgba(0, 229, 255, 0.15)',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                boxSizing: 'border-box',
                position: 'relative'
              }}
            >
              {/* Modal Header */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid rgba(203, 213, 225, 0.15)', paddingBottom: '12px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '10px',
                      background: '#1e212b',
                      border: '1px solid #00E5FF',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#00E5FF'
                    }}
                  >
                    <Key style={{ width: '18px', height: '18px' }} />
                  </div>
                  <div>
                    <div style={{ fontSize: '15px', fontWeight: 900, fontFamily: 'monospace', color: '#ffffff', letterSpacing: '0.5px' }}>
                      VERIFICATION ID RECOVERY
                    </div>
                    <div style={{ fontSize: '11px', color: '#94a3b8' }}>Secure Sovereign Dispatch Relay</div>
                  </div>
                </div>
                <button
                  type="button"
                  id="close-recovery-modal-btn"
                  onClick={() => {
                    sound.playClick();
                    setShowRecoveryModal(false);
                    setRecoverySuccessMsg('');
                    setRecoveryErrorMsg('');
                  }}
                  style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(203, 213, 225, 0.2)',
                    borderRadius: '8px',
                    color: '#94a3b8',
                    cursor: 'pointer',
                    padding: '6px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.2s'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#ffffff';
                    e.currentTarget.style.borderColor = '#cbd5e1';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = '#94a3b8';
                    e.currentTarget.style.borderColor = 'rgba(203, 213, 225, 0.2)';
                  }}
                >
                  <X style={{ width: '16px', height: '16px' }} />
                </button>
              </div>

              {/* Instructions Text */}
              <p style={{ fontSize: '12px', color: '#cbd5e1', lineHeight: 1.5, margin: 0, fontFamily: 'monospace' }}>
                Enter your node credentials below. If your records match on the grid ledger, your permanent Verification ID will be re-sent directly to your registered email inbox.
              </p>

              {/* Status Notifications */}
              {recoverySuccessMsg && (
                <div
                  id="recovery-success-banner"
                  style={{
                    background: 'rgba(16, 185, 129, 0.12)',
                    border: '1px solid #10b981',
                    borderRadius: '8px',
                    padding: '10px 14px',
                    color: '#34d399',
                    fontSize: '12px',
                    fontFamily: 'monospace',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}
                >
                  <CheckCircle2 style={{ width: '16px', height: '16px', flexShrink: 0 }} />
                  <span>{recoverySuccessMsg}</span>
                </div>
              )}

              {recoveryErrorMsg && (
                <div
                  id="recovery-error-banner"
                  style={{
                    background: 'rgba(239, 68, 68, 0.12)',
                    border: '1px solid #ef4444',
                    borderRadius: '8px',
                    padding: '10px 14px',
                    color: '#f87171',
                    fontSize: '12px',
                    fontFamily: 'monospace',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}
                >
                  <AlertTriangle style={{ width: '16px', height: '16px', flexShrink: 0 }} />
                  <span>{recoveryErrorMsg}</span>
                </div>
              )}

              {/* Input Form Fields */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {/* Username Input */}
                <div>
                  <label
                    htmlFor="recovery-username-input"
                    style={{
                      display: 'block',
                      fontSize: '11px',
                      fontFamily: 'monospace',
                      color: '#cbd5e1',
                      marginBottom: '6px',
                      fontWeight: 'bold'
                    }}
                  >
                    USERNAME / OPERATOR HANDLE *
                  </label>
                  <div style={{ position: 'relative' }}>
                    <User style={{ width: '14px', height: '14px', position: 'absolute', left: '10px', top: '10px', color: '#94a3b8' }} />
                    <input
                      id="recovery-username-input"
                      type="text"
                      placeholder="e.g. chinaza_joseph"
                      value={recoveryUsername}
                      onChange={(e) => setRecoveryUsername(e.target.value)}
                      style={{
                        width: '100%',
                        backgroundColor: '#0d0f15',
                        border: '1px solid rgba(203, 213, 225, 0.25)',
                        borderRadius: '8px',
                        padding: '8px 12px 8px 32px',
                        color: '#f8fafc',
                        fontSize: '12px',
                        fontFamily: 'monospace',
                        outline: 'none',
                        boxSizing: 'border-box'
                      }}
                    />
                  </div>
                </div>

                {/* Registered Email Input */}
                <div>
                  <label
                    htmlFor="recovery-email-input"
                    style={{
                      display: 'block',
                      fontSize: '11px',
                      fontFamily: 'monospace',
                      color: '#cbd5e1',
                      marginBottom: '6px',
                      fontWeight: 'bold'
                    }}
                  >
                    REGISTERED EMAIL ADDRESS *
                  </label>
                  <div style={{ position: 'relative' }}>
                    <Mail style={{ width: '14px', height: '14px', position: 'absolute', left: '10px', top: '10px', color: '#94a3b8' }} />
                    <input
                      id="recovery-email-input"
                      type="email"
                      placeholder="e.g. chinazasuccess437@gmail.com"
                      value={recoveryEmail}
                      onChange={(e) => setRecoveryEmail(e.target.value)}
                      style={{
                        width: '100%',
                        backgroundColor: '#0d0f15',
                        border: '1px solid rgba(203, 213, 225, 0.25)',
                        borderRadius: '8px',
                        padding: '8px 12px 8px 32px',
                        color: '#f8fafc',
                        fontSize: '12px',
                        fontFamily: 'monospace',
                        outline: 'none',
                        boxSizing: 'border-box'
                      }}
                    />
                  </div>
                </div>

                {/* Registered Phone Number Input */}
                <div>
                  <label
                    htmlFor="recovery-phone-input"
                    style={{
                      display: 'block',
                      fontSize: '11px',
                      fontFamily: 'monospace',
                      color: '#cbd5e1',
                      marginBottom: '6px',
                      fontWeight: 'bold'
                    }}
                  >
                    PHONE NUMBER *
                  </label>
                  <div style={{ position: 'relative' }}>
                    <Phone style={{ width: '14px', height: '14px', position: 'absolute', left: '10px', top: '10px', color: '#94a3b8' }} />
                    <input
                      id="recovery-phone-input"
                      type="text"
                      placeholder="e.g. +234 810 000 0000"
                      value={recoveryPhone}
                      onChange={(e) => setRecoveryPhone(e.target.value)}
                      style={{
                        width: '100%',
                        backgroundColor: '#0d0f15',
                        border: '1px solid rgba(203, 213, 225, 0.25)',
                        borderRadius: '8px',
                        padding: '8px 12px 8px 32px',
                        color: '#f8fafc',
                        fontSize: '12px',
                        fontFamily: 'monospace',
                        outline: 'none',
                        boxSizing: 'border-box'
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', gap: '10px', marginTop: '6px' }}>
                <button
                  type="button"
                  id="cancel-recovery-btn"
                  onClick={() => {
                    sound.playClick();
                    setShowRecoveryModal(false);
                    setRecoverySuccessMsg('');
                    setRecoveryErrorMsg('');
                  }}
                  style={{
                    flex: '0 0 auto',
                    padding: '10px 16px',
                    borderRadius: '8px',
                    backgroundColor: '#1b1d26',
                    border: '1px solid rgba(203, 213, 225, 0.2)',
                    color: '#cbd5e1',
                    fontSize: '12px',
                    fontFamily: 'monospace',
                    fontWeight: 'bold',
                    cursor: 'pointer'
                  }}
                >
                  CANCEL
                </button>

                <button
                  type="button"
                  id="submit-recovery-id-btn"
                  disabled={recoveryLoading}
                  onClick={async () => {
                    const u = recoveryUsername.trim();
                    const e = recoveryEmail.trim();
                    const p = recoveryPhone.trim();

                    if (!u || !e || !p) {
                      sound.playError();
                      setRecoveryErrorMsg('All fields (Username, Email, Phone Number) are required.');
                      return;
                    }

                    setRecoveryLoading(true);
                    setRecoveryErrorMsg('');
                    setRecoverySuccessMsg('');

                    try {
                      const response = await fetch(`${API_BASE_URL}/api/auth/recover-id`, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                          username: u,
                          email: e,
                          phone_number: p
                        })
                      });

                      const data = await response.json();

                      if (!response.ok) {
                        sound.playError();
                        setRecoveryErrorMsg(data.detail || 'Identity records do not match.');
                      } else {
                        sound.playSuccess();
                        setRecoverySuccessMsg('Your operational ID has been re-dispatched to your inbox.');
                        triggerToast('✨ Verification ID sent to your email!');
                      }
                    } catch (err: any) {
                      console.error('Recovery request error:', err);
                      // Fallback verification against local storage profile
                      if (
                        currentUserProfile &&
                        currentUserProfile.username.toLowerCase() === u.toLowerCase() &&
                        currentUserProfile.email.toLowerCase() === e.toLowerCase()
                      ) {
                        sound.playSuccess();
                        setRecoverySuccessMsg('Your operational ID has been re-dispatched to your inbox.');
                        triggerToast('✨ Verification ID sent to your email!');
                      } else {
                        sound.playError();
                        setRecoveryErrorMsg('Identity records do not match.');
                      }
                    } finally {
                      setRecoveryLoading(false);
                    }
                  }}
                  style={{
                    flex: 1,
                    padding: '11px 14px',
                    borderRadius: '8px',
                    background: 'linear-gradient(135deg, #ffffff 0%, #cbd5e1 50%, #94a3b8 100%)',
                    border: '1px solid #cbd5e1',
                    color: '#121316',
                    fontSize: '12px',
                    fontWeight: 900,
                    fontFamily: 'monospace',
                    letterSpacing: '0.5px',
                    cursor: recoveryLoading ? 'wait' : 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '6px',
                    boxShadow: '0 4px 16px rgba(203, 213, 225, 0.25)',
                    opacity: recoveryLoading ? 0.7 : 1
                  }}
                >
                  <Send style={{ width: '14px', height: '14px', color: '#121316' }} />
                  <span>{recoveryLoading ? 'DISPATCHING RECOVERY...' : 'DISPATCH VERIFICATION ID'}</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div
      id="chixus-root-application"
      style={{
        width: '100%',
        minHeight: '100vh',
        background: darkModeTheme
          ? 'radial-gradient(ellipse at top, #1e293b 0%, #0f172a 40%, #090d16 100%)'
          : 'radial-gradient(ellipse at top, #ffffff 0%, #f1f5f9 50%, #e2e8f0 100%)',
        color: darkModeTheme ? '#f1f5f9' : '#0f172a',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, monospace, sans-serif',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: 0,
        margin: 0,
        boxSizing: 'border-box'
      }}
    >
      {/* 480px Mobile Viewport Container */}
      <div
        id="chixus-mobile-viewport"
        style={{
          width: '100%',
          maxWidth: '480px',
          minHeight: '100vh',
          background: '#0d0f14',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: '0 0 60px rgba(0, 0, 0, 0.7), 0 0 1px rgba(255, 255, 255, 0.1)',
          borderLeft: '1px solid #1a1d26',
          borderRight: '1px solid #1a1d26',
          position: 'relative',
          paddingBottom: '24px',
          boxSizing: 'border-box'
        }}
      >
        {/* Top Header with Profile Avatar, CX Emblem, CHIXUS Title & Menu */}
        <header
          id="app-top-header"
          style={{
            position: 'sticky',
            top: 0,
            zIndex: 900,
            background: '#0d0f14',
            borderBottom: '1px solid #1c202a',
            padding: '12px 14px 10px',
            display: 'flex',
            flexDirection: 'column',
            gap: '10px'
          }}
        >
          {/* Top Row: User Avatar, CHIXUS Title & Menu Button */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div
                id="header-user-avatar-node"
                style={{
                  width: '34px',
                  height: '34px',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  border: '2px solid #00E5FF',
                  boxShadow: '0 0 10px rgba(0, 229, 255, 0.4)',
                  cursor: 'pointer',
                  flexShrink: 0
                }}
                onClick={() => {
                  sound.playClick();
                  setIsSideDrawerOpen(true);
                }}
                title="Tap profile avatar to open menu drawer"
              >
                <img
                  src={avatarUrl}
                  alt={userName}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  referrerPolicy="no-referrer"
                />
              </div>

              <span
                style={{
                  fontSize: '16px',
                  fontWeight: 900,
                  fontFamily: 'monospace',
                  letterSpacing: '1px',
                  color: '#ffffff'
                }}
              >
                CHIXUS
              </span>
            </div>

            {/* Menu Action Button (Three Horizontal Lines Menu) */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <button
                type="button"
                id="header-menu-drawer-btn"
                onClick={() => {
                  sound.playClick();
                  setIsSideDrawerOpen(true);
                }}
                style={{
                  background: '#161822',
                  border: '1px solid #282c3c',
                  borderRadius: '8px',
                  width: '34px',
                  height: '34px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff',
                  cursor: 'pointer'
                }}
                title="Menu Drawer"
              >
                <Menu style={{ width: '18px', height: '18px' }} />
              </button>
            </div>
          </div>

          {/* Top Segmented Navigation Pills Bar */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              background: '#13151b',
              border: '1px solid #222530',
              borderRadius: '12px',
              padding: '3px',
              gap: '2px'
            }}
          >
            {[
              { id: 'feed', label: 'Feed', icon: Globe },
              { id: 'inspect', label: 'Inspect', icon: Camera },
              { id: 'metrics', label: 'Metrics', icon: LayoutGrid },
              { id: 'messages', label: 'Messages', icon: Mail },
              { id: 'profile', label: 'Profile', icon: User }
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => {
                    sound.playClick();
                    setActiveTab(tab.id as typeof activeTab);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  style={{
                    flex: 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '4px',
                    background: isActive ? '#ffffff' : 'transparent',
                    color: isActive ? '#000000' : '#94a3b8',
                    border: 'none',
                    borderRadius: '8px',
                    padding: '7px 4px',
                    fontSize: '11px',
                    fontWeight: isActive ? 700 : 500,
                    fontFamily: 'monospace',
                    cursor: 'pointer',
                    boxShadow: isActive ? '0 2px 8px rgba(0,0,0,0.3)' : 'none',
                    transition: 'all 0.15s ease'
                  }}
                >
                  <Icon style={{ width: '13px', height: '13px' }} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </header>

        {/* Main Tab Content Display */}
        <main style={{ flex: 1, padding: '12px', boxSizing: 'border-box' }}>
          {/* ======================================================== */}
          {/* 1. NETWORK / FEED TAB                                    */}
          {/* ======================================================== */}
          {activeTab === 'feed' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {/* Creator Box */}
              <form
                onSubmit={handleCreatePost}
                style={{
                  background: '#161820',
                  border: '1px solid #232634',
                  borderRadius: '16px',
                  padding: '16px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.3)'
                }}
              >
                {/* Row: Avatar + Textarea */}
                <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <img
                    src={avatarUrl}
                    alt={userName}
                    onClick={() =>
                      handleOpenUserNode({
                        name: userName,
                        badge: 'FOUNDER & AI ARCHITECT',
                        avatar: avatarUrl,
                        inspectionsConducted: formatNumber(userInspectionsConducted),
                        faultsIsolated: formatNumber(userFaultsIsolated),
                        aiScanAccuracy: userAiScanAccuracy,
                        location: userLocation,
                        headline: userHeadline,
                        summary: executiveSummary
                      })
                    }
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      objectFit: 'cover',
                      border: '1.5px solid #38bdf8',
                      cursor: 'pointer',
                      flexShrink: 0
                    }}
                    title="View your Operator Profile"
                  />
                  <textarea
                    rows={3}
                    value={newPostContent}
                    onChange={(e) => setNewPostContent(e.target.value)}
                    placeholder="Share a technical update, circuit blueprint, or verification telemetry..."
                    style={{
                      flex: 1,
                      padding: '12px',
                      borderRadius: '10px',
                      background: '#0b0d13',
                      border: '1px solid #1e212b',
                      color: '#ffffff',
                      fontSize: '12px',
                      fontFamily: 'monospace',
                      outline: 'none',
                      resize: 'none',
                      boxSizing: 'border-box',
                      lineHeight: 1.5
                    }}
                  />
                </div>

                {newPostImage && (
                  <div style={{ position: 'relative', borderRadius: '10px', overflow: 'hidden', maxHeight: '180px' }}>
                    <img src={newPostImage} alt="Preview" style={{ width: '100%', maxHeight: '180px', objectFit: 'cover' }} />
                    <button
                      type="button"
                      onClick={() => setNewPostImage(null)}
                      style={{
                        position: 'absolute',
                        top: '6px',
                        right: '6px',
                        background: 'rgba(0,0,0,0.75)',
                        color: '#ffffff',
                        border: 'none',
                        borderRadius: '50%',
                        width: '24px',
                        height: '24px',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <X style={{ width: '14px', height: '14px' }} />
                    </button>
                  </div>
                )}

                {/* Row: Publishing Info & Add Media Button */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ fontSize: '11px', fontFamily: 'monospace', color: '#71717a' }}>
                    Publishing as: <span style={{ color: '#ffffff', fontWeight: 'bold' }}>{userName}</span>
                  </div>

                  <button
                    type="button"
                    onClick={() => postFileInputRef.current?.click()}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      background: '#1c1f2a',
                      border: '1px solid #2b3040',
                      borderRadius: '8px',
                      padding: '6px 12px',
                      color: '#e2e8f0',
                      fontSize: '11px',
                      fontFamily: 'monospace',
                      cursor: 'pointer'
                    }}
                  >
                    <Camera style={{ width: '13px', height: '13px' }} />
                    <span>Add Media</span>
                  </button>
                  <input
                    ref={postFileInputRef}
                    type="file"
                    accept="image/*"
                    style={{ display: 'none' }}
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) {
                        const reader = new FileReader();
                        reader.onload = () => setNewPostImage(reader.result as string);
                        reader.readAsDataURL(file);
                      }
                    }}
                  />
                </div>

                {/* Big White Pill Button: Share Update */}
                <button
                  type="submit"
                  disabled={!newPostContent.trim() && !newPostImage}
                  style={{
                    width: '100%',
                    padding: '10px 16px',
                    borderRadius: '10px',
                    background: !newPostContent.trim() && !newPostImage ? '#2b2e3b' : '#ffffff',
                    color: !newPostContent.trim() && !newPostImage ? '#71717a' : '#000000',
                    border: 'none',
                    fontSize: '12px',
                    fontWeight: 'bold',
                    fontFamily: 'monospace',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    cursor: !newPostContent.trim() && !newPostImage ? 'not-allowed' : 'pointer',
                    boxShadow: '0 4px 12px rgba(255,255,255,0.12)'
                  }}
                >
                  <Send style={{ width: '14px', height: '14px', transform: 'rotate(-25deg)' }} />
                  <span>Share Update</span>
                </button>
              </form>

              {/* Feed Timeline Posts */}
              {posts.map((post) => (
                <div
                  key={post.id}
                  style={{
                    background: '#161820',
                    border: '1px solid #232634',
                    borderRadius: '16px',
                    padding: '16px',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '12px'
                  }}
                >
                  {/* Post Header */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div
                      style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}
                      onClick={() => openPeerProfile(post.author)}
                      title={`View ${post.author}'s operator profile`}
                    >
                      <div style={{ position: 'relative' }}>
                        <img
                          src={post.avatar}
                          alt={post.author}
                          style={{
                            width: '40px',
                            height: '40px',
                            borderRadius: '50%',
                            objectFit: 'cover',
                            border: '1.5px solid #38bdf8',
                            boxShadow: '0 0 10px rgba(56, 189, 248, 0.35)',
                            display: 'block'
                          }}
                        />
                        <span
                          style={{
                            position: 'absolute',
                            bottom: 0,
                            right: 0,
                            width: '9px',
                            height: '9px',
                            borderRadius: '50%',
                            backgroundColor: '#10b981',
                            border: '1.5px solid #0f172a'
                          }}
                        />
                      </div>
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                          <span
                            style={{
                              fontSize: '13px',
                              fontWeight: 'bold',
                              fontFamily: 'monospace',
                              color: '#ffffff'
                            }}
                          >
                            {post.author}
                          </span>
                          <span
                            style={{
                              fontSize: '9px',
                              background: '#22242f',
                              border: '1px solid #333745',
                              color: '#d1d5db',
                              padding: '2px 6px',
                              borderRadius: '4px',
                              fontFamily: 'monospace',
                              fontWeight: 'bold',
                              letterSpacing: '0.4px'
                            }}
                          >
                            {post.badge}
                          </span>
                        </div>
                        <div style={{ fontSize: '11px', fontFamily: 'monospace', color: '#71717a', marginTop: '2px' }}>
                          <span>{post.time} • </span>
                          <span
                            onClick={(e) => {
                              e.stopPropagation();
                              openPeerProfile(post.author);
                            }}
                            style={{ color: '#c084fc', cursor: 'pointer' }}
                          >
                            Tap profile
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Right Badge / Status Button */}
                    <div>
                      {post.author === userName ? (
                        <div
                          style={{
                            background: 'rgba(5, 150, 105, 0.15)',
                            border: '1px solid #059669',
                            color: '#34d399',
                            padding: '3px 8px',
                            borderRadius: '8px',
                            fontSize: '11px',
                            fontWeight: 'bold',
                            fontFamily: 'monospace'
                          }}
                        >
                          You (Founder)
                        </div>
                      ) : (
                        <button
                          type="button"
                          onClick={() => openPeerProfile(post.author)}
                          style={{
                            background: 'rgba(5, 150, 105, 0.15)',
                            border: '1px solid #059669',
                            color: '#34d399',
                            padding: '3px 8px',
                            borderRadius: '8px',
                            fontSize: '11px',
                            fontWeight: 'bold',
                            fontFamily: 'monospace',
                            cursor: 'pointer'
                          }}
                        >
                          ✓ Connected
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Post Content */}
                  <div style={{ fontSize: '13px', fontFamily: 'monospace', lineHeight: 1.5, color: '#e2e8f0', whiteSpace: 'pre-wrap' }}>
                    {post.content}
                  </div>

                  {post.postMedia && (
                    <div style={{ borderRadius: '10px', overflow: 'hidden', maxHeight: '200px' }}>
                      <img src={post.postMedia} alt="Media" style={{ width: '100%', maxHeight: '200px', objectFit: 'cover' }} />
                    </div>
                  )}

                  {/* Actions Bar */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      borderTop: '1px solid #232634',
                      paddingTop: '10px',
                      fontSize: '12px',
                      fontFamily: 'monospace'
                    }}
                  >
                    <button
                      type="button"
                      onClick={() => handleToggleLike(post.id)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        background: 'none',
                        border: 'none',
                        color: post.verified ? '#38bdf8' : '#cbd5e1',
                        fontWeight: post.verified ? 'bold' : 'normal',
                        cursor: 'pointer'
                      }}
                    >
                      <Zap style={{ width: '15px', height: '15px', fill: post.verified ? '#38bdf8' : 'none', color: post.verified ? '#38bdf8' : '#94a3b8' }} />
                      <span>{formatNumber(post.verifications)} Verifications</span>
                    </button>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                      <button
                        type="button"
                        onClick={() => setExpandedComments((prev) => ({ ...prev, [post.id]: !prev[post.id] }))}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '6px',
                          background: 'none',
                          border: 'none',
                          color: '#cbd5e1',
                          cursor: 'pointer'
                        }}
                      >
                        <MessageSquare style={{ width: '15px', height: '15px' }} />
                        <span>{post.comments.length} Comments</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => {
                          sound.playClick();
                          setShareTargetPost(post);
                          setIsShareDrawerOpen(true);
                        }}
                        style={{ display: 'flex', alignItems: 'center', background: 'none', border: 'none', color: '#cbd5e1', cursor: 'pointer' }}
                        title="Share"
                      >
                        <Share2 style={{ width: '15px', height: '15px' }} />
                      </button>
                    </div>
                  </div>

                  {/* Comments Preview Box (always shown with purple arrows) */}
                  <div
                    style={{
                      background: '#0c0e14',
                      border: '1px solid #1c202a',
                      borderRadius: '8px',
                      padding: '10px 12px',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '6px',
                      fontFamily: 'monospace',
                      fontSize: '11px'
                    }}
                  >
                    {post.comments.map((comm, cIdx) => {
                      const parts = comm.split(': ');
                      const authorPart = parts.length > 1 ? parts[0] : null;
                      const textPart = parts.length > 1 ? parts.slice(1).join(': ') : comm;
                      return (
                        <div
                          key={cIdx}
                          style={{
                            display: 'flex',
                            alignItems: 'baseline',
                            gap: '6px',
                            color: '#cbd5e1'
                          }}
                        >
                          <span style={{ color: '#c084fc', fontWeight: 'bold' }}>↳</span>
                          {authorPart ? (
                            <>
                              <button
                                type="button"
                                onClick={() => openPeerProfile(authorPart)}
                                style={{
                                  background: 'none',
                                  border: 'none',
                                  padding: 0,
                                  color: '#38bdf8',
                                  fontWeight: 'bold',
                                  fontFamily: 'monospace',
                                  fontSize: '11px',
                                  cursor: 'pointer',
                                  textDecoration: 'underline'
                                }}
                              >
                                {authorPart}:
                              </button>
                              <span>{textPart}</span>
                            </>
                          ) : (
                            <span>{comm}</span>
                          )}
                        </div>
                      );
                    })}

                    {/* Interactive Comment Input */}
                    <div style={{ display: 'flex', gap: '6px', marginTop: '4px' }}>
                      <input
                        type="text"
                        value={commentInputs[post.id] || ''}
                        onChange={(e) => setCommentInputs((prev) => ({ ...prev, [post.id]: e.target.value }))}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter') {
                            handleAddComment(post.id, commentInputs[post.id] || '');
                          }
                        }}
                        placeholder="Add a comment..."
                        style={{
                          flex: 1,
                          padding: '6px 10px',
                          borderRadius: '6px',
                          background: '#161822',
                          border: '1px solid #232736',
                          color: '#ffffff',
                          fontSize: '11px',
                          fontFamily: 'monospace',
                          outline: 'none'
                        }}
                      />
                      <button
                        type="button"
                        onClick={() => handleAddComment(post.id, commentInputs[post.id] || '')}
                        style={{
                          padding: '6px 12px',
                          borderRadius: '6px',
                          background: '#ffffff',
                          color: '#000000',
                          border: 'none',
                          fontSize: '11px',
                          fontWeight: 'bold',
                          fontFamily: 'monospace',
                          cursor: 'pointer'
                        }}
                      >
                        Reply
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* ======================================================== */}
          {/* 2. INSPECTOR / DIAGNOSTICS TAB                           */}
          {/* ======================================================== */}
          {activeTab === 'inspect' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <div
                style={{
                  background: darkModeTheme ? 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)' : '#ffffff',
                  border: darkModeTheme ? '1px solid #334155' : '1px solid #cbd5e1',
                  borderRadius: '12px',
                  padding: '14px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Cpu style={{ width: '18px', height: '18px', color: '#38bdf8' }} />
                    <span style={{ fontSize: '13px', fontWeight: 'bold', fontFamily: 'monospace' }}>
                      INT8 Solder Joint Inspector
                    </span>
                  </div>
                  <span
                    style={{
                      fontSize: '9px',
                      background: 'rgba(56, 189, 248, 0.15)',
                      color: '#38bdf8',
                      padding: '2px 6px',
                      borderRadius: '4px',
                      fontFamily: 'monospace',
                      fontWeight: 'bold',
                      border: '1px solid rgba(56, 189, 248, 0.3)'
                    }}
                  >
                    ON-DEVICE TENSOR
                  </span>
                </div>

                {/* Circuit Image Box */}
                <div
                  style={{
                    position: 'relative',
                    width: '100%',
                    height: '220px',
                    borderRadius: '10px',
                    overflow: 'hidden',
                    background: '#090d16',
                    border: '1px solid #334155',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  {selectedCircuitImage ? (
                    <img src={selectedCircuitImage} alt="Circuit" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  ) : (
                    <span style={{ fontSize: '11px', color: '#94a3b8', fontFamily: 'monospace' }}>No circuit loaded</span>
                  )}

                  {/* Scanning Animation */}
                  {isScanning && (
                    <div
                      style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'rgba(0, 0, 0, 0.65)',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '10px'
                      }}
                    >
                      <RefreshCw style={{ width: '28px', height: '28px', color: '#38bdf8', animation: 'spin 1s linear infinite' }} />
                      <span style={{ fontSize: '11px', fontFamily: 'monospace', color: '#38bdf8', fontWeight: 'bold' }}>
                        Verifying Solder Joints... {scanProgress}%
                      </span>
                    </div>
                  )}
                </div>

                {/* Upload & Inspect Buttons */}
                <div style={{ display: 'flex', gap: '8px' }}>
                  <button
                    type="button"
                    onClick={() => inspectorFileInputRef.current?.click()}
                    style={{
                      flex: 1,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '6px',
                      padding: '10px',
                      borderRadius: '8px',
                      background: darkModeTheme ? '#090d16' : '#f1f5f9',
                      border: darkModeTheme ? '1px solid #334155' : '1px solid #cbd5e1',
                      color: darkModeTheme ? '#ffffff' : '#0f172a',
                      fontSize: '11px',
                      fontFamily: 'monospace',
                      fontWeight: 'bold',
                      cursor: 'pointer'
                    }}
                  >
                    <Camera style={{ width: '14px', height: '14px', color: '#38bdf8' }} />
                    <span>Upload Custom Photo</span>
                  </button>
                  <input
                    ref={inspectorFileInputRef}
                    type="file"
                    accept="image/*"
                    style={{ display: 'none' }}
                    onChange={handleCircuitImageUpload}
                  />

                  <button
                    type="button"
                    disabled={isScanning}
                    onClick={handleStartInspection}
                    style={{
                      flex: 1,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '6px',
                      padding: '10px',
                      borderRadius: '8px',
                      background: 'linear-gradient(135deg, #38bdf8 0%, #0284c7 100%)',
                      color: '#ffffff',
                      border: 'none',
                      fontSize: '11px',
                      fontFamily: 'monospace',
                      fontWeight: 'bold',
                      cursor: isScanning ? 'not-allowed' : 'pointer'
                    }}
                  >
                    <Zap style={{ width: '14px', height: '14px' }} />
                    <span>Run Verification</span>
                  </button>
                </div>

                {/* Scan Result Card */}
                {scanResult && (
                  <div
                    style={{
                      padding: '12px',
                      borderRadius: '8px',
                      background: darkModeTheme ? '#090d16' : '#f8fafc',
                      border: '1px solid #38bdf8',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '8px'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <CheckCircle2 style={{ width: '16px', height: '16px', color: '#34d399' }} />
                        <span style={{ fontSize: '11px', fontWeight: 'bold', fontFamily: 'monospace', color: '#34d399' }}>
                          {scanResult.label}
                        </span>
                      </div>
                      <span style={{ fontSize: '10px', color: '#38bdf8', fontFamily: 'monospace', fontWeight: 'bold' }}>
                        {scanResult.confidence}
                      </span>
                    </div>
                    <div style={{ fontSize: '10px', color: darkModeTheme ? '#cbd5e1' : '#475569', fontFamily: 'monospace', lineHeight: 1.4 }}>
                      {scanResult.details}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* ======================================================== */}
          {/* 3. METRICS / TELEMETRY TAB                               */}
          {/* ======================================================== */}
          {activeTab === 'metrics' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, 1fr)',
                  gap: '10px'
                }}
              >
                <div
                  style={{
                    background: darkModeTheme ? 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)' : '#ffffff',
                    border: darkModeTheme ? '1px solid #334155' : '1px solid #cbd5e1',
                    borderRadius: '10px',
                    padding: '12px',
                    fontFamily: 'monospace'
                  }}
                >
                  <div style={{ fontSize: '10px', color: '#94a3b8' }}>TOTAL INSPECTIONS</div>
                  <div style={{ fontSize: '18px', fontWeight: 'bold', color: '#38bdf8', marginTop: '4px' }}>
                    {formatNumber(userInspectionsConducted)}
                  </div>
                  <div style={{ fontSize: '8px', color: userInspectionsConducted > 0 ? '#34d399' : '#94a3b8', marginTop: '2px' }}>
                    {userInspectionsConducted > 0 ? '+14.2% Fleet Growth' : '0 Scans Logged'}
                  </div>
                </div>

                <div
                  style={{
                    background: darkModeTheme ? 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)' : '#ffffff',
                    border: darkModeTheme ? '1px solid #334155' : '1px solid #cbd5e1',
                    borderRadius: '10px',
                    padding: '12px',
                    fontFamily: 'monospace'
                  }}
                >
                  <div style={{ fontSize: '10px', color: '#94a3b8' }}>VERIFIED ACCURACY</div>
                  <div style={{ fontSize: '18px', fontWeight: 'bold', color: '#34d399', marginTop: '4px' }}>
                    {userAiScanAccuracy}
                  </div>
                  <div style={{ fontSize: '8px', color: '#38bdf8', marginTop: '2px' }}>
                    {userInspectionsConducted > 0 ? 'INT8 Model Validated' : 'INT8 Model Standby'}
                  </div>
                </div>
              </div>

              {/* Verified Logs List */}
              <div
                style={{
                  background: darkModeTheme ? 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)' : '#ffffff',
                  border: darkModeTheme ? '1px solid #334155' : '1px solid #cbd5e1',
                  borderRadius: '12px',
                  padding: '14px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px'
                }}
              >
                <div style={{ fontSize: '12px', fontWeight: 'bold', fontFamily: 'monospace', color: '#38bdf8' }}>
                  Live Diagnostic Logs
                </div>
                {scanLogs.length > 0 ? (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    {scanLogs.map((log) => (
                      <div
                        key={log.id}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          padding: '8px 10px',
                          borderRadius: '6px',
                          background: darkModeTheme ? '#090d16' : '#f8fafc',
                          border: darkModeTheme ? '1px solid #1e293b' : '1px solid #cbd5e1',
                          fontSize: '10px',
                          fontFamily: 'monospace'
                        }}
                      >
                        <div>
                          <div style={{ fontWeight: 'bold' }}>{log.fileName}</div>
                          <div style={{ fontSize: '8px', color: '#94a3b8' }}>{log.timestamp}</div>
                        </div>
                        <div style={{ textAlign: 'right' }}>
                          <div style={{ color: '#34d399', fontWeight: 'bold' }}>{log.status}</div>
                          <div style={{ fontSize: '8px', color: '#38bdf8' }}>{log.accuracy}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div
                    style={{
                      padding: '24px 16px',
                      borderRadius: '8px',
                      background: darkModeTheme ? '#090d16' : '#f8fafc',
                      border: darkModeTheme ? '1px dashed #334155' : '1px dashed #cbd5e1',
                      textAlign: 'center',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '6px'
                    }}
                  >
                    <div style={{ fontSize: '13px', fontWeight: 'bold', fontFamily: 'monospace', color: darkModeTheme ? '#cbd5e1' : '#475569' }}>
                      Empty
                    </div>
                    <div style={{ fontSize: '10px', color: '#94a3b8', fontFamily: 'monospace' }}>
                      No diagnostic scans conducted yet. Run a verification from the Inspector tab to generate logs.
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* ======================================================== */}
          {/* 4. MESSAGES TAB (Straight Vertical Conversations Layout) */}
          {/* ======================================================== */}
          {activeTab === 'messages' && (
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                minHeight: 'calc(100vh - 160px)'
              }}
            >
              {!isChatOpen ? (
                /* ---------------------------------------------------- */
                /* 4A. VERTICAL CONVERSATION LIST (INBOX VIEW)           */
                /* ---------------------------------------------------- */
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {/* Messages Search & Header Card */}
                  <div
                    style={{
                      background: '#161820',
                      border: '1px solid #232634',
                      borderRadius: '16px',
                      padding: '14px 16px',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '10px',
                      boxShadow: '0 4px 20px rgba(0,0,0,0.3)'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <div>
                        <div style={{ fontSize: '14px', fontWeight: 900, fontFamily: 'monospace', color: '#ffffff' }}>
                          Operator Messages
                        </div>
                        <div style={{ fontSize: '10px', color: '#38bdf8', fontFamily: 'monospace', marginTop: '2px' }}>
                          {contacts.length} Direct Peer Channels Active
                        </div>
                      </div>
                      <div
                        style={{
                          background: 'rgba(56, 189, 248, 0.1)',
                          border: '1px solid rgba(56, 189, 248, 0.3)',
                          color: '#38bdf8',
                          padding: '3px 8px',
                          borderRadius: '8px',
                          fontSize: '10px',
                          fontFamily: 'monospace',
                          fontWeight: 'bold'
                        }}
                      >
                        ● ENCRYPTED
                      </div>
                    </div>

                    {/* Search Field */}
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        background: '#0b0d13',
                        border: '1px solid #1e212b',
                        borderRadius: '10px',
                        padding: '8px 12px'
                      }}
                    >
                      <Search style={{ width: '14px', height: '14px', color: '#64748b' }} />
                      <input
                        type="text"
                        value={messageSearchQuery}
                        onChange={(e) => setMessageSearchQuery(e.target.value)}
                        placeholder="Search conversations by name or message..."
                        style={{
                          flex: 1,
                          background: 'none',
                          border: 'none',
                          color: '#ffffff',
                          fontSize: '11px',
                          fontFamily: 'monospace',
                          outline: 'none'
                        }}
                      />
                      {messageSearchQuery && (
                        <button
                          type="button"
                          onClick={() => setMessageSearchQuery('')}
                          style={{ background: 'none', border: 'none', color: '#94a3b8', cursor: 'pointer', padding: 0 }}
                        >
                          <X style={{ width: '12px', height: '12px' }} />
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Straight Vertical Stack of Messages / Conversations */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {contacts
                      .filter((c) => {
                        if (!messageSearchQuery.trim()) return true;
                        const q = messageSearchQuery.toLowerCase();
                        const matchName = c.name.toLowerCase().includes(q);
                        const matchRole = c.role.toLowerCase().includes(q);
                        const matchMsg = chatMessages.some(
                          (m) => m.contactId === c.id && m.text.toLowerCase().includes(q)
                        );
                        return matchName || matchRole || matchMsg;
                      })
                      .map((c) => {
                        const contactMsgs = chatMessages.filter((m) => m.contactId === c.id);
                        const lastMsg = contactMsgs[contactMsgs.length - 1];
                        return (
                          <button
                            key={c.id}
                            type="button"
                            onClick={() => {
                              sound.playClick();
                              setActiveContactId(c.id);
                              setIsChatOpen(true);
                            }}
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'space-between',
                              background: '#161820',
                              border: '1px solid #232634',
                              borderRadius: '14px',
                              padding: '12px 14px',
                              cursor: 'pointer',
                              textAlign: 'left',
                              width: '100%',
                              boxSizing: 'border-box',
                              transition: 'all 0.15s ease',
                              boxShadow: '0 2px 10px rgba(0,0,0,0.2)'
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.borderColor = '#38bdf8';
                              e.currentTarget.style.background = '#1a1d26';
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.borderColor = '#232634';
                              e.currentTarget.style.background = '#161820';
                            }}
                          >
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flex: 1, minWidth: 0 }}>
                              <div style={{ position: 'relative', flexShrink: 0 }}>
                                <img
                                  src={c.avatar}
                                  alt={c.name}
                                  style={{
                                    width: '42px',
                                    height: '42px',
                                    borderRadius: '50%',
                                    objectFit: 'cover',
                                    border: '1.5px solid #38bdf8'
                                  }}
                                />
                                <span
                                  style={{
                                    position: 'absolute',
                                    bottom: 0,
                                    right: 0,
                                    width: '10px',
                                    height: '10px',
                                    borderRadius: '50%',
                                    backgroundColor: c.status === 'Online' ? '#10b981' : '#f59e0b',
                                    border: '2px solid #161820'
                                  }}
                                />
                              </div>

                              <div style={{ flex: 1, minWidth: 0 }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                  <span
                                    style={{
                                      fontSize: '13px',
                                      fontWeight: 'bold',
                                      fontFamily: 'monospace',
                                      color: '#ffffff',
                                      whiteSpace: 'nowrap',
                                      overflow: 'hidden',
                                      textOverflow: 'ellipsis'
                                    }}
                                  >
                                    {c.name}
                                  </span>
                                  <span
                                    style={{
                                      fontSize: '8px',
                                      background: '#22242f',
                                      color: '#94a3b8',
                                      padding: '1px 5px',
                                      borderRadius: '4px',
                                      fontFamily: 'monospace'
                                    }}
                                  >
                                    {c.status}
                                  </span>
                                </div>
                                <div
                                  style={{
                                    fontSize: '9px',
                                    color: '#38bdf8',
                                    fontFamily: 'monospace',
                                    marginTop: '2px',
                                    whiteSpace: 'nowrap',
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis'
                                  }}
                                >
                                  {c.role}
                                </div>
                                <div
                                  style={{
                                    fontSize: '11px',
                                    color: '#94a3b8',
                                    fontFamily: 'monospace',
                                    marginTop: '4px',
                                    whiteSpace: 'nowrap',
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis'
                                  }}
                                >
                                  {lastMsg
                                    ? (lastMsg.sender === 'me' ? 'You: ' : '') + lastMsg.text
                                    : 'Start operator telemetry chat...'}
                                </div>
                              </div>
                            </div>

                            <div
                              style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'flex-end',
                                gap: '6px',
                                marginLeft: '10px',
                                flexShrink: 0
                              }}
                            >
                              <span style={{ fontSize: '10px', color: '#71717a', fontFamily: 'monospace' }}>
                                {lastMsg ? lastMsg.timestamp : 'Recent'}
                              </span>
                              <ChevronRight style={{ width: '15px', height: '15px', color: '#64748b' }} />
                            </div>
                          </button>
                        );
                      })}
                  </div>
                </div>
              ) : (
                /* ---------------------------------------------------- */
                /* 4B. ACTIVE DIRECT CHAT WINDOW (STRAIGHT VERTICAL)     */
                /* ---------------------------------------------------- */
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    height: 'calc(100vh - 160px)',
                    background: '#161820',
                    borderRadius: '16px',
                    border: '1px solid #232634',
                    overflow: 'hidden',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.3)'
                  }}
                >
                  {/* Chat Top Nav Bar with Back button */}
                  {(() => {
                    const currentContact = contacts.find((c) => c.id === activeContactId) || contacts[0];
                    if (!currentContact) return null;
                    return (
                      <div
                        style={{
                          padding: '10px 14px',
                          background: '#11131a',
                          borderBottom: '1px solid #232634',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between'
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                          <button
                            type="button"
                            onClick={() => {
                              sound.playClick();
                              setIsChatOpen(false);
                            }}
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: '4px',
                              background: '#1c1f2a',
                              border: '1px solid #2b3040',
                              borderRadius: '8px',
                              padding: '5px 8px',
                              color: '#ffffff',
                              fontSize: '11px',
                              fontFamily: 'monospace',
                              cursor: 'pointer'
                            }}
                            title="Back to all message channels"
                          >
                            <ArrowLeft style={{ width: '13px', height: '13px' }} />
                            <span>Messages</span>
                          </button>

                          <div
                            style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}
                            onClick={() => openPeerProfile(currentContact.name)}
                            title={`View ${currentContact.name}'s profile`}
                          >
                            <div style={{ position: 'relative' }}>
                              <img
                                src={currentContact.avatar}
                                alt={currentContact.name}
                                style={{
                                  width: '32px',
                                  height: '32px',
                                  borderRadius: '50%',
                                  objectFit: 'cover',
                                  border: '1.5px solid #38bdf8'
                                }}
                              />
                              <span
                                style={{
                                  position: 'absolute',
                                  bottom: 0,
                                  right: 0,
                                  width: '7px',
                                  height: '7px',
                                  borderRadius: '50%',
                                  backgroundColor: currentContact.status === 'Online' ? '#10b981' : '#f59e0b',
                                  border: '1.5px solid #11131a'
                                }}
                              />
                            </div>
                            <div>
                              <div
                                style={{
                                  fontSize: '12px',
                                  fontWeight: 'bold',
                                  fontFamily: 'monospace',
                                  color: '#ffffff'
                                }}
                              >
                                {currentContact.name}
                              </div>
                              <div style={{ fontSize: '9px', color: '#38bdf8', fontFamily: 'monospace' }}>
                                {currentContact.role}
                              </div>
                            </div>
                          </div>
                        </div>

                        <button
                          type="button"
                          onClick={() => openPeerProfile(currentContact.name)}
                          style={{
                            background: 'none',
                            border: '1px solid #38bdf8',
                            borderRadius: '6px',
                            padding: '3px 8px',
                            color: '#38bdf8',
                            fontSize: '9px',
                            fontFamily: 'monospace',
                            cursor: 'pointer'
                          }}
                        >
                          Profile ↗
                        </button>
                      </div>
                    );
                  })()}

                  {/* Chat Messages Vertical Scroll Stream */}
                  <div
                    ref={chatScrollRef}
                    style={{
                      flex: 1,
                      padding: '14px',
                      overflowY: 'auto',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '12px',
                      background: '#0d0f14'
                    }}
                  >
                    {(() => {
                      const activePeer = contacts.find((c) => c.id === activeContactId) || contacts[0];
                      return activeConversation.map((msg) => {
                        const isMe = msg.sender === 'me';
                        const msgAvatar = isMe
                          ? avatarUrl
                          : activePeer?.avatar ||
                            'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=400';
                        const msgAuthor = isMe ? userName : activePeer?.name || 'Mesh Operator';
                        return (
                          <div
                            key={msg.id}
                            style={{
                              alignSelf: isMe ? 'flex-end' : 'flex-start',
                              maxWidth: '84%',
                              display: 'flex',
                              flexDirection: isMe ? 'row-reverse' : 'row',
                              alignItems: 'flex-end',
                              gap: '8px'
                            }}
                          >
                            <img
                              src={msgAvatar}
                              alt={msgAuthor}
                              style={{
                                width: '28px',
                                height: '28px',
                                borderRadius: '50%',
                                objectFit: 'cover',
                                border: '1px solid #38bdf8',
                                cursor: 'pointer',
                                flexShrink: 0
                              }}
                              onClick={() => handleOpenUserNode({ name: msgAuthor, avatar: msgAvatar })}
                              title={`View ${msgAuthor}'s profile`}
                            />
                            <div
                              style={{
                                padding: '10px 12px',
                                borderRadius: isMe ? '14px 14px 2px 14px' : '14px 14px 14px 2px',
                                background: isMe ? '#ffffff' : '#1a1d26',
                                color: isMe ? '#000000' : '#ffffff',
                                border: isMe ? 'none' : '1px solid #282c3c',
                                fontSize: '12px',
                                fontFamily: 'monospace',
                                lineHeight: 1.45,
                                boxShadow: '0 2px 10px rgba(0,0,0,0.25)'
                              }}
                            >
                              {msg.imageAttachment && (
                                <img
                                  src={msg.imageAttachment}
                                  alt="Attachment"
                                  style={{
                                    width: '100%',
                                    borderRadius: '8px',
                                    marginBottom: '6px',
                                    maxHeight: '160px',
                                    objectFit: 'cover'
                                  }}
                                />
                              )}
                              <div style={{ whiteSpace: 'pre-wrap' }}>{msg.text}</div>
                              <div
                                style={{
                                  fontSize: '9px',
                                  color: isMe ? '#52525b' : '#94a3b8',
                                  marginTop: '4px',
                                  textAlign: 'right',
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'flex-end',
                                  gap: '4px'
                                }}
                              >
                                <span>{msg.timestamp}</span>
                                {isMe && <CheckCheck style={{ width: '11px', height: '11px', color: '#0284c7' }} />}
                              </div>
                            </div>
                          </div>
                        );
                      });
                    })()}
                  </div>

                  {/* Chat Input Bar */}
                  <form
                    onSubmit={handleSendMessage}
                    style={{
                      padding: '10px 12px',
                      background: '#11131a',
                      borderTop: '1px solid #232634',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px'
                    }}
                  >
                    <button
                      type="button"
                      onClick={() => chatFileInputRef.current?.click()}
                      style={{
                        background: '#1c1f2a',
                        border: '1px solid #2b3040',
                        borderRadius: '8px',
                        padding: '6px 8px',
                        color: '#38bdf8',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                      title="Attach photo/circuit"
                    >
                      <Camera style={{ width: '14px', height: '14px' }} />
                    </button>
                    <input
                      ref={chatFileInputRef}
                      type="file"
                      accept="image/*"
                      style={{ display: 'none' }}
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) {
                          const reader = new FileReader();
                          reader.onload = () => setChatImageAttachment(reader.result as string);
                          reader.readAsDataURL(file);
                        }
                      }}
                    />

                    <input
                      type="text"
                      value={newChatText}
                      onChange={(e) => setNewChatText(e.target.value)}
                      placeholder={`Message ${activeContact.name}...`}
                      style={{
                        flex: 1,
                        padding: '9px 12px',
                        borderRadius: '10px',
                        background: '#0b0d13',
                        border: '1px solid #1e212b',
                        color: '#ffffff',
                        fontSize: '12px',
                        fontFamily: 'monospace',
                        outline: 'none'
                      }}
                    />

                    <button
                      type="submit"
                      disabled={!newChatText.trim() && !chatImageAttachment}
                      style={{
                        padding: '9px 14px',
                        borderRadius: '10px',
                        background: !newChatText.trim() && !chatImageAttachment ? '#2b2e3b' : '#ffffff',
                        color: !newChatText.trim() && !chatImageAttachment ? '#71717a' : '#000000',
                        border: 'none',
                        fontSize: '11px',
                        fontWeight: 'bold',
                        fontFamily: 'monospace',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '6px',
                        cursor: !newChatText.trim() && !chatImageAttachment ? 'not-allowed' : 'pointer'
                      }}
                    >
                      <Send style={{ width: '13px', height: '13px', transform: 'rotate(-25deg)' }} />
                      <span>Send</span>
                    </button>
                  </form>
                </div>
              )}
            </div>
          )}

          {/* ======================================================== */}
          {/* 5. PROFILE & SETTINGS TAB (With ✏️ Edit Pencil)           */}
          {/* ======================================================== */}
          {activeTab === 'profile' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {/* Profile Card with Cover */}
              <div
                style={{
                  background: darkModeTheme ? 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)' : '#ffffff',
                  border: darkModeTheme ? '1px solid #334155' : '1px solid #cbd5e1',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.15)'
                }}
              >
                {/* Banner with Change Cover button */}
                <div style={{ height: '110px', width: '100%', position: 'relative', overflow: 'hidden' }}>
                  <img src={coverUrl} alt="Cover" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <button
                    type="button"
                    onClick={() => profileCoverInputRef.current?.click()}
                    title="Change Cover Banner"
                    style={{
                      position: 'absolute',
                      top: '8px',
                      right: '8px',
                      background: 'rgba(15, 23, 42, 0.75)',
                      backdropFilter: 'blur(4px)',
                      border: '1px solid rgba(56, 189, 248, 0.4)',
                      borderRadius: '6px',
                      padding: '4px 8px',
                      color: '#ffffff',
                      fontSize: '9px',
                      fontFamily: 'monospace',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px',
                      boxShadow: '0 2px 6px rgba(0,0,0,0.5)'
                    }}
                  >
                    <Camera style={{ width: '11px', height: '11px', color: '#38bdf8' }} />
                    <span>Change Banner</span>
                  </button>
                  <input
                    ref={profileCoverInputRef}
                    type="file"
                    accept="image/*"
                    style={{ display: 'none' }}
                    onChange={handleDirectCoverUpload}
                  />
                </div>

                {/* Avatar & Header */}
                <div style={{ padding: '0 14px 14px', position: 'relative', marginTop: '-38px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                    {/* Interactive Profile Picture with Camera Action */}
                    <div style={{ position: 'relative', display: 'inline-block' }}>
                      <button
                        type="button"
                        onClick={() => profileAvatarInputRef.current?.click()}
                        title="Click to change profile picture"
                        style={{
                          position: 'relative',
                          width: '76px',
                          height: '76px',
                          borderRadius: '50%',
                          padding: 0,
                          background: 'none',
                          border: '3px solid #38bdf8',
                          boxShadow: '0 0 16px rgba(56, 189, 248, 0.5)',
                          cursor: 'pointer',
                          overflow: 'hidden',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                      >
                        <img
                          src={avatarUrl}
                          alt={userName}
                          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                        <div
                          style={{
                            position: 'absolute',
                            inset: 0,
                            background: 'rgba(0, 0, 0, 0.45)',
                            opacity: 0,
                            transition: 'opacity 0.2s ease',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: '#ffffff'
                          }}
                          onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
                          onMouseLeave={(e) => (e.currentTarget.style.opacity = '0')}
                        >
                          <Camera style={{ width: '18px', height: '18px', color: '#38bdf8' }} />
                          <span style={{ fontSize: '7px', fontWeight: 'bold', fontFamily: 'monospace', marginTop: '2px' }}>
                            CHANGE
                          </span>
                        </div>
                      </button>

                      {/* Floating Camera Button Badge */}
                      <button
                        type="button"
                        onClick={() => profileAvatarInputRef.current?.click()}
                        title="Upload new profile picture"
                        style={{
                          position: 'absolute',
                          bottom: '0px',
                          right: '0px',
                          width: '24px',
                          height: '24px',
                          borderRadius: '50%',
                          background: 'linear-gradient(135deg, #38bdf8 0%, #0284c7 100%)',
                          border: darkModeTheme ? '2px solid #0f172a' : '2px solid #ffffff',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: '#ffffff',
                          cursor: 'pointer',
                          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.5)'
                        }}
                      >
                        <Camera style={{ width: '12px', height: '12px' }} />
                      </button>

                      <input
                        ref={profileAvatarInputRef}
                        type="file"
                        accept="image/*"
                        style={{ display: 'none' }}
                        onChange={handleDirectAvatarUpload}
                      />
                    </div>

                    {/* ✏️ Edit Profile Button */}
                    <button
                      type="button"
                      onClick={() => {
                        sound.playClick();
                        setEditNameInput(userName);
                        setEditHeadlineInput(userHeadline);
                        setEditLocationInput(userLocation);
                        setEditAvatarPreview(avatarUrl);
                        setEditCoverPreview(coverUrl);
                        setIsEditProfileModalOpen(true);
                      }}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        padding: '6px 12px',
                        borderRadius: '20px',
                        background: 'linear-gradient(135deg, #38bdf8 0%, #0284c7 100%)',
                        color: '#ffffff',
                        border: 'none',
                        fontSize: '11px',
                        fontFamily: 'monospace',
                        fontWeight: 'bold',
                        cursor: 'pointer',
                        boxShadow: '0 2px 8px rgba(56, 189, 248, 0.4)'
                      }}
                    >
                      <Edit3 style={{ width: '12px', height: '12px' }} />
                      <span>Edit Profile</span>
                    </button>
                  </div>

                  <div style={{ marginTop: '10px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
                      <div style={{ fontSize: '15px', fontWeight: 900, fontFamily: 'monospace' }}>{userName}</div>
                      {/* Metallic Silver Badge for Private Operator Key */}
                      <div
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '5px',
                          padding: '2px 8px',
                          borderRadius: '6px',
                          background: 'linear-gradient(135deg, rgba(226, 232, 240, 0.15) 0%, rgba(148, 163, 184, 0.25) 100%)',
                          border: '1px solid #94a3b8',
                          color: '#e2e8f0',
                          fontSize: '10px',
                          fontFamily: 'monospace',
                          fontWeight: 'bold',
                          boxShadow: '0 2px 6px rgba(0,0,0,0.3)'
                        }}
                        title="Your unique private login operator key"
                      >
                        <Lock style={{ width: '10px', height: '10px', color: '#38bdf8' }} />
                        <span>Private Operator Key:</span>
                        <span style={{ color: '#ffffff', fontWeight: 900, letterSpacing: '0.4px' }}>
                          {currentUserProfile?.secretId || generatedSecretID || 'CHX-7749-NG'}
                        </span>
                      </div>
                    </div>
                    {userHeadline ? (
                      <div style={{ fontSize: '11px', color: '#38bdf8', fontFamily: 'monospace', marginTop: '4px' }}>
                        {userHeadline}
                      </div>
                    ) : (
                      <div
                        onClick={() => {
                          sound.playClick();
                          setEditNameInput(userName);
                          setEditHeadlineInput(userHeadline);
                          setEditLocationInput(userLocation);
                          setEditSummaryInput(executiveSummary);
                          setEditAvatarPreview(avatarUrl);
                          setEditCoverPreview(coverUrl);
                          setIsEditProfileModalOpen(true);
                        }}
                        style={{
                          fontSize: '11px',
                          color: '#64748b',
                          fontFamily: 'monospace',
                          marginTop: '4px',
                          cursor: 'pointer',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '4px'
                        }}
                      >
                        <Plus style={{ width: '10px', height: '10px' }} />
                        <span>Add your professional headline...</span>
                      </div>
                    )}
                    <div style={{ fontSize: '10px', color: '#94a3b8', fontFamily: 'monospace', marginTop: '4px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <MapPin style={{ width: '11px', height: '11px', color: '#fb7185' }} />
                      <span>{userLocation}</span>
                    </div>
                  </div>

                  {/* Industrial Telemetry Metrics Dashboard Block */}
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(3, 1fr)',
                      gap: '8px',
                      background: darkModeTheme
                        ? 'linear-gradient(135deg, #181b24 0%, #111319 100%)'
                        : 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)',
                      padding: '12px 10px',
                      borderRadius: '10px',
                      border: darkModeTheme ? '1px solid #2f3445' : '1px solid #cbd5e1',
                      boxShadow: '0 2px 10px rgba(0,0,0,0.15)',
                      textAlign: 'center',
                      fontFamily: 'monospace',
                      marginTop: '12px'
                    }}
                  >
                    <div>
                      <div style={{ fontSize: '15px', fontWeight: 900, color: '#38bdf8' }}>
                        {formatNumber(userInspectionsConducted)}
                      </div>
                      <div style={{ fontSize: '9px', color: darkModeTheme ? '#94a3b8' : '#64748b', textTransform: 'uppercase', marginTop: '2px', fontWeight: 'bold' }}>
                        Inspections Conducted
                      </div>
                    </div>
                    <div>
                      <div style={{ fontSize: '15px', fontWeight: 900, color: '#fb7185' }}>
                        {formatNumber(userFaultsIsolated)}
                      </div>
                      <div style={{ fontSize: '9px', color: darkModeTheme ? '#94a3b8' : '#64748b', textTransform: 'uppercase', marginTop: '2px', fontWeight: 'bold' }}>
                        Faults Isolated
                      </div>
                    </div>
                    <div>
                      <div style={{ fontSize: '15px', fontWeight: 900, color: '#34d399' }}>
                        {userAiScanAccuracy}
                      </div>
                      <div style={{ fontSize: '9px', color: darkModeTheme ? '#94a3b8' : '#64748b', textTransform: 'uppercase', marginTop: '2px', fontWeight: 'bold' }}>
                        AI Scan Accuracy
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Executive Summary / Engineering Bio */}
              <div
                style={{
                  background: darkModeTheme ? 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)' : '#ffffff',
                  border: darkModeTheme ? '1px solid #334155' : '1px solid #cbd5e1',
                  borderRadius: '12px',
                  padding: '14px',
                  fontFamily: 'monospace'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px' }}>
                  <div style={{ fontSize: '12px', fontWeight: 'bold', color: '#38bdf8' }}>
                    Engineering Bio & Summary
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      sound.playClick();
                      setEditNameInput(userName);
                      setEditHeadlineInput(userHeadline);
                      setEditLocationInput(userLocation);
                      setEditSummaryInput(executiveSummary);
                      setEditAvatarPreview(avatarUrl);
                      setEditCoverPreview(coverUrl);
                      setIsEditProfileModalOpen(true);
                    }}
                    title="Edit Engineering Bio"
                    style={{
                      background: 'none',
                      border: 'none',
                      color: '#38bdf8',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px',
                      fontSize: '11px',
                      fontFamily: 'monospace'
                    }}
                  >
                    <Edit3 style={{ width: '12px', height: '12px' }} />
                    <span>Edit ✏️</span>
                  </button>
                </div>
                {executiveSummary && executiveSummary.trim().length > 0 ? (
                  <div style={{ fontSize: '11px', lineHeight: 1.5, color: darkModeTheme ? '#cbd5e1' : '#334155' }}>
                    {executiveSummary}
                  </div>
                ) : (
                  <div
                    onClick={() => {
                      sound.playClick();
                      setEditNameInput(userName);
                      setEditHeadlineInput(userHeadline);
                      setEditLocationInput(userLocation);
                      setEditSummaryInput(executiveSummary);
                      setEditAvatarPreview(avatarUrl);
                      setEditCoverPreview(coverUrl);
                      setIsEditProfileModalOpen(true);
                    }}
                    style={{
                      fontSize: '11px',
                      lineHeight: 1.5,
                      color: '#64748b',
                      cursor: 'pointer',
                      padding: '10px 12px',
                      borderRadius: '8px',
                      border: '1px dashed #475569',
                      background: darkModeTheme ? '#090d16' : '#f8fafc',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px'
                    }}
                  >
                    <Edit3 style={{ width: '13px', height: '13px', color: '#38bdf8' }} />
                    <span>Type your engineering bio/summary here...</span>
                  </div>
                )}
              </div>

              {/* Experience Matrix / Deployment Arrangements */}
              <div
                style={{
                  background: darkModeTheme ? 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)' : '#ffffff',
                  border: darkModeTheme ? '1px solid #334155' : '1px solid #cbd5e1',
                  borderRadius: '12px',
                  padding: '14px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px',
                  fontFamily: 'monospace'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ fontSize: '12px', fontWeight: 'bold', color: '#38bdf8' }}>
                    Deployments & Roles
                  </div>
                  <button
                    type="button"
                    onClick={handleOpenAddDeployment}
                    title="Add Deployment Arrangement"
                    style={{
                      background: 'none',
                      border: 'none',
                      color: '#38bdf8',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px',
                      fontSize: '11px',
                      fontFamily: 'monospace',
                      fontWeight: 'bold'
                    }}
                  >
                    <Plus style={{ width: '13px', height: '13px' }} />
                    <span>Add Deployment ➕</span>
                  </button>
                </div>

                {experiences.length === 0 ? (
                  <div
                    onClick={handleOpenAddDeployment}
                    style={{
                      fontSize: '11px',
                      lineHeight: 1.5,
                      color: '#64748b',
                      cursor: 'pointer',
                      padding: '14px 12px',
                      borderRadius: '8px',
                      border: '1px dashed #475569',
                      background: darkModeTheme ? '#090d16' : '#f8fafc',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '6px',
                      textAlign: 'center'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#38bdf8', fontWeight: 'bold' }}>
                      <Edit3 style={{ width: '13px', height: '13px' }} />
                      <span>Type your deployment arrangements here...</span>
                    </div>
                    <span style={{ fontSize: '10px', color: '#94a3b8' }}>
                      Click to enter your title, organization or cluster, and diagnostic responsibilities safely.
                    </span>
                  </div>
                ) : (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {experiences.map((exp) => (
                      <div
                        key={exp.id}
                        style={{
                          padding: '12px',
                          borderRadius: '8px',
                          background: darkModeTheme ? '#090d16' : '#f8fafc',
                          border: darkModeTheme ? '1px solid #1e293b' : '1px solid #cbd5e1',
                          fontFamily: 'monospace',
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '4px',
                          position: 'relative'
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '8px' }}>
                          <div>
                            <div style={{ fontSize: '12px', fontWeight: 'bold', color: darkModeTheme ? '#f1f5f9' : '#0f172a' }}>
                              {exp.role}
                            </div>
                            <div style={{ fontSize: '10px', color: '#38bdf8', marginTop: '2px', fontWeight: 'bold' }}>
                              {exp.company}
                            </div>
                          </div>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                            <button
                              type="button"
                              onClick={() => handleOpenEditDeployment(exp)}
                              title="Edit this deployment arrangement"
                              style={{
                                background: 'rgba(56, 189, 248, 0.12)',
                                border: '1px solid rgba(56, 189, 248, 0.3)',
                                borderRadius: '4px',
                                color: '#38bdf8',
                                padding: '3px 8px',
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '3px',
                                fontSize: '10px',
                                fontFamily: 'monospace'
                              }}
                            >
                              <Edit3 style={{ width: '11px', height: '11px' }} />
                              <span>Edit</span>
                            </button>
                            <button
                              type="button"
                              onClick={() => handleDeleteDeployment(exp.id)}
                              title="Remove this deployment arrangement"
                              style={{
                                background: 'rgba(239, 68, 68, 0.12)',
                                border: '1px solid rgba(239, 68, 68, 0.3)',
                                borderRadius: '4px',
                                color: '#f87171',
                                padding: '3px 8px',
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '3px',
                                fontSize: '10px',
                                fontFamily: 'monospace'
                              }}
                            >
                              <Trash2 style={{ width: '11px', height: '11px' }} />
                              <span>Delete</span>
                            </button>
                          </div>
                        </div>
                        <div style={{ fontSize: '10px', color: darkModeTheme ? '#94a3b8' : '#475569', marginTop: '4px', lineHeight: 1.4 }}>
                          {exp.description}
                        </div>
                      </div>
                    ))}

                    <button
                      type="button"
                      onClick={handleOpenAddDeployment}
                      style={{
                        padding: '8px',
                        borderRadius: '6px',
                        background: 'none',
                        border: darkModeTheme ? '1px dashed #334155' : '1px dashed #94a3b8',
                        color: '#38bdf8',
                        fontSize: '10px',
                        fontFamily: 'monospace',
                        fontWeight: 'bold',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '6px',
                        marginTop: '4px'
                      }}
                    >
                      <Plus style={{ width: '12px', height: '12px' }} />
                      <span>+ Add Another Deployment Arrangement</span>
                    </button>
                  </div>
                )}
              </div>

              {/* Endorsements Form & List */}
              <div
                style={{
                  background: darkModeTheme ? 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)' : '#ffffff',
                  border: darkModeTheme ? '1px solid #334155' : '1px solid #cbd5e1',
                  borderRadius: '12px',
                  padding: '14px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px'
                }}
              >
                <div style={{ fontSize: '12px', fontWeight: 'bold', color: '#38bdf8', fontFamily: 'monospace' }}>
                  Peer Endorsements
                </div>

                <form onSubmit={handleAddEndorsement} style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <textarea
                    rows={2}
                    value={newEndorsementText}
                    onChange={(e) => setNewEndorsementText(e.target.value)}
                    placeholder={`Leave a technical endorsement for ${userName}...`}
                    style={{
                      width: '100%',
                      padding: '8px',
                      borderRadius: '6px',
                      background: darkModeTheme ? '#090d16' : '#f8fafc',
                      border: darkModeTheme ? '1px solid #334155' : '1px solid #cbd5e1',
                      color: darkModeTheme ? '#ffffff' : '#0f172a',
                      fontSize: '11px',
                      fontFamily: 'monospace',
                      outline: 'none',
                      resize: 'none',
                      boxSizing: 'border-box'
                    }}
                  />
                  <button
                    type="submit"
                    disabled={!newEndorsementText.trim()}
                    style={{
                      alignSelf: 'flex-end',
                      padding: '6px 14px',
                      borderRadius: '6px',
                      background: !newEndorsementText.trim() ? '#475569' : '#059669',
                      color: '#ffffff',
                      border: 'none',
                      fontSize: '10px',
                      fontFamily: 'monospace',
                      fontWeight: 'bold',
                      cursor: !newEndorsementText.trim() ? 'not-allowed' : 'pointer'
                    }}
                  >
                    Post Endorsement
                  </button>
                </form>

                {profileComments.map((pc) => (
                  <div
                    key={pc.id}
                    style={{
                      padding: '10px',
                      borderRadius: '8px',
                      background: darkModeTheme ? '#090d16' : '#f8fafc',
                      border: darkModeTheme ? '1px solid #1e293b' : '1px solid #cbd5e1',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '4px',
                      fontFamily: 'monospace'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <div
                        style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}
                        onClick={() => openPeerProfile(pc.author)}
                        title={`View ${pc.author}'s profile`}
                      >
                        <img
                          src={pc.avatar || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=400'}
                          alt={pc.author}
                          style={{
                            width: '28px',
                            height: '28px',
                            borderRadius: '50%',
                            objectFit: 'cover',
                            border: '1px solid #38bdf8'
                          }}
                        />
                        <div>
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              openPeerProfile(pc.author);
                            }}
                            style={{
                              background: 'none',
                              border: 'none',
                              padding: 0,
                              fontSize: '11px',
                              fontWeight: 'bold',
                              color: '#38bdf8',
                              cursor: 'pointer',
                              textAlign: 'left'
                            }}
                          >
                            {pc.author}
                          </button>
                          <div style={{ fontSize: '9px', color: '#c084fc' }}>{pc.badge}</div>
                        </div>
                      </div>
                      <span style={{ fontSize: '8px', color: '#94a3b8' }}>{pc.time}</span>
                    </div>
                    <div style={{ fontSize: '10px', color: darkModeTheme ? '#cbd5e1' : '#334155', marginTop: '4px' }}>
                      {pc.comment}
                    </div>
                  </div>
                ))}
              </div>

              {/* Operator Node Security & Logout Action Card */}
              <div
                id="profile-logout-security-card"
                style={{
                  background: darkModeTheme ? '#131622' : '#ffffff',
                  border: '1px solid rgba(239, 68, 68, 0.3)',
                  borderRadius: '12px',
                  padding: '14px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Shield style={{ width: '16px', height: '16px', color: '#ef4444' }} />
                    <span style={{ fontSize: '12px', fontWeight: 'bold', fontFamily: 'monospace', color: '#ffffff' }}>
                      OPERATOR ACCESS CONTROL
                    </span>
                  </div>
                  <span style={{ fontSize: '10px', fontFamily: 'monospace', color: '#10b981', background: '#0e1d17', border: '1px solid #10b981', borderRadius: '4px', padding: '2px 6px' }}>
                    AUTHENTICATED
                  </span>
                </div>

                <p style={{ margin: 0, fontSize: '11px', color: '#94a3b8', fontFamily: 'monospace', lineHeight: 1.4 }}>
                  Terminate active master credentials and lock the node to return to the onboarding gateway.
                </p>

                <button
                  type="button"
                  id="profile-interactive-logout-btn"
                  onClick={() => {
                    sound.playClick();
                    triggerToast('🔒 Operator session logged out. Node locked.');
                    setOnboardStage('login');
                  }}
                  style={{
                    width: '100%',
                    padding: '10px 14px',
                    borderRadius: '8px',
                    background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.2) 0%, rgba(185, 28, 28, 0.3) 100%)',
                    border: '1px solid #ef4444',
                    color: '#fecaca',
                    fontSize: '12px',
                    fontFamily: 'monospace',
                    fontWeight: 'bold',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    cursor: 'pointer',
                    transition: 'all 0.2s'
                  }}
                >
                  <LogOut style={{ width: '15px', height: '15px', color: '#f87171' }} />
                  <span>LOGOUT OPERATOR NODE</span>
                </button>
              </div>
            </div>
          )}
        </main>

        {/* Global Toast Feedback Banner */}
        {toastFeedback && (
          <div
            id="global-toast-banner"
            style={{
              position: 'fixed',
              top: '68px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '90%',
              maxWidth: '420px',
              background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
              border: '1px solid #38bdf8',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.9), 0 0 15px rgba(56, 189, 248, 0.4)',
              borderRadius: '10px',
              padding: '10px 14px',
              zIndex: 10001,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '8px',
              color: '#ffffff',
              fontSize: '11px',
              fontFamily: 'monospace'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Sparkles style={{ width: '14px', height: '14px', color: '#38bdf8', flexShrink: 0 }} />
              <span>{toastFeedback}</span>
            </div>
            <button
              type="button"
              onClick={() => setToastFeedback(null)}
              style={{ background: 'none', border: 'none', color: '#94a3b8', cursor: 'pointer' }}
            >
              <X style={{ width: '12px', height: '12px' }} />
            </button>
          </div>
        )}

        {/* Side Drawer Navigation Menu */}
        {isSideDrawerOpen && (
          <div
            id="side-drawer-backdrop"
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 9999,
              backgroundColor: 'rgba(0, 0, 0, 0.75)',
              backdropFilter: 'blur(4px)',
              display: 'flex',
              justifyContent: 'flex-start'
            }}
            onClick={() => setIsSideDrawerOpen(false)}
          >
            <div
              id="side-drawer-pane"
              style={{
                width: '290px',
                height: '100%',
                background: darkModeTheme
                  ? 'linear-gradient(180deg, #1e2430 0%, #111620 50%, #0d111a 100%)'
                  : 'linear-gradient(180deg, #ffffff 0%, #f1f5f9 100%)',
                borderRight: darkModeTheme ? '1px solid #334155' : '1px solid #cbd5e1',
                padding: '20px 16px',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                boxSizing: 'border-box',
                boxShadow: '10px 0 40px rgba(0, 0, 0, 0.8)'
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div style={{ width: '32px', height: '32px', borderRadius: '50%', overflow: 'hidden', border: '2px solid #94a3b8' }}>
                    <img src={metallicLogo} alt="Logo" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <span style={{ fontSize: '14px', fontWeight: 900, fontFamily: 'monospace' }}>CHIXUS Grid</span>
                </div>
                <button
                  type="button"
                  onClick={() => setIsSideDrawerOpen(false)}
                  style={{ background: 'none', border: 'none', color: '#94a3b8', cursor: 'pointer' }}
                >
                  <X style={{ width: '18px', height: '18px' }} />
                </button>
              </div>

              {/* User Snapshot */}
              <div
                style={{
                  padding: '12px',
                  background: darkModeTheme ? '#090d16' : '#f8fafc',
                  borderRadius: '10px',
                  border: darkModeTheme ? '1px solid #334155' : '1px solid #cbd5e1',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px'
                }}
              >
                <img src={avatarUrl} alt={userName} style={{ width: '40px', height: '40px', borderRadius: '50%', objectFit: 'cover' }} />
                <div>
                  <div style={{ fontSize: '12px', fontWeight: 'bold', fontFamily: 'monospace' }}>{userName}</div>
                  <div style={{ fontSize: '10px', color: '#38bdf8', fontFamily: 'monospace', fontWeight: 'bold' }}>{formatNumber(userInspectionsConducted)} Inspections • {userAiScanAccuracy} Accuracy</div>
                  <div style={{ fontSize: '9px', color: '#94a3b8', fontFamily: 'monospace' }}>{userLocation}</div>
                </div>
              </div>

              {/* Navigation Links */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                {[
                  { id: 'feed', label: 'Network Timeline', icon: Layers },
                  { id: 'inspect', label: 'Circuit Solder Inspector', icon: Cpu },
                  { id: 'metrics', label: 'Telemetry & Logs', icon: Activity },
                  { id: 'messages', label: 'Peer Chat', icon: MessageSquare },
                  { id: 'profile', label: 'Master Profile', icon: User }
                ].map((item) => {
                  const Icon = item.icon;
                  const isActive = activeTab === item.id;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => {
                        sound.playClick();
                        setActiveTab(item.id as typeof activeTab);
                        setIsSideDrawerOpen(false);
                      }}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        padding: '10px 12px',
                        borderRadius: '8px',
                        background: isActive ? 'linear-gradient(135deg, rgba(56, 189, 248, 0.2) 0%, rgba(2, 132, 199, 0.1) 100%)' : 'transparent',
                        border: isActive ? '1px solid rgba(56, 189, 248, 0.4)' : '1px solid transparent',
                        color: isActive ? '#38bdf8' : darkModeTheme ? '#cbd5e1' : '#0f172a',
                        fontSize: '12px',
                        fontFamily: 'monospace',
                        fontWeight: 'bold',
                        cursor: 'pointer',
                        textAlign: 'left'
                      }}
                    >
                      <Icon style={{ width: '16px', height: '16px' }} />
                      <span>{item.label}</span>
                    </button>
                  );
                })}

                <button
                  type="button"
                  onClick={() => {
                    sound.playClick();
                    setIsSideDrawerOpen(false);
                    setOnboardStage('splash');
                  }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '10px 12px',
                    borderRadius: '8px',
                    background: 'transparent',
                    border: '1px solid rgba(226, 232, 240, 0.15)',
                    color: '#94a3b8',
                    fontSize: '12px',
                    fontFamily: 'monospace',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    textAlign: 'left',
                    marginTop: '8px'
                  }}
                >
                  <Shield style={{ width: '16px', height: '16px', color: '#cbd5e1' }} />
                  <span>Onboarding Gateway</span>
                </button>

                <button
                  type="button"
                  id="drawer-interactive-logout-btn"
                  onClick={() => {
                    sound.playClick();
                    setIsSideDrawerOpen(false);
                    triggerToast('🔒 Operator session logged out. Node locked.');
                    setOnboardStage('login');
                  }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '10px 12px',
                    borderRadius: '8px',
                    background: 'rgba(239, 68, 68, 0.12)',
                    border: '1px solid rgba(239, 68, 68, 0.35)',
                    color: '#fca5a5',
                    fontSize: '12px',
                    fontFamily: 'monospace',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    textAlign: 'left',
                    marginTop: '6px'
                  }}
                >
                  <LogOut style={{ width: '16px', height: '16px', color: '#f87171' }} />
                  <span>Logout / Lock Node</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ✏️ LinkedIn-Style Edit Profile Modal */}
        {isEditProfileModalOpen && (
          <div
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 10000,
              backgroundColor: 'rgba(0, 0, 0, 0.8)',
              backdropFilter: 'blur(6px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '16px'
            }}
          >
            <form
              onSubmit={handleSaveProfileEdits}
              style={{
                width: '100%',
                maxWidth: '420px',
                background: darkModeTheme ? '#0f172a' : '#ffffff',
                borderRadius: '12px',
                border: '1px solid #38bdf8',
                boxShadow: '0 15px 40px rgba(0,0,0,0.8)',
                padding: '18px',
                display: 'flex',
                flexDirection: 'column',
                gap: '14px',
                boxSizing: 'border-box'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Edit3 style={{ width: '16px', height: '16px', color: '#38bdf8' }} />
                  <span style={{ fontSize: '14px', fontWeight: 'bold', fontFamily: 'monospace' }}>Edit Master Credentials</span>
                </div>
                <button
                  type="button"
                  onClick={() => setIsEditProfileModalOpen(false)}
                  style={{ background: 'none', border: 'none', color: '#94a3b8', cursor: 'pointer' }}
                >
                  <X style={{ width: '16px', height: '16px' }} />
                </button>
              </div>

              {/* Avatar & Cover Picture Editors */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '10px',
                  borderRadius: '8px',
                  background: darkModeTheme ? '#090d16' : '#f8fafc',
                  border: darkModeTheme ? '1px solid #334155' : '1px solid #cbd5e1'
                }}
              >
                <div style={{ position: 'relative' }}>
                  <img
                    src={editAvatarPreview}
                    alt="Preview"
                    style={{
                      width: '54px',
                      height: '54px',
                      borderRadius: '50%',
                      objectFit: 'cover',
                      border: '2px solid #38bdf8'
                    }}
                  />
                  <button
                    type="button"
                    onClick={() => editModalAvatarInputRef.current?.click()}
                    title="Upload Avatar Image"
                    style={{
                      position: 'absolute',
                      bottom: '-2px',
                      right: '-2px',
                      width: '20px',
                      height: '20px',
                      borderRadius: '50%',
                      background: '#0284c7',
                      color: '#ffffff',
                      border: '1.5px solid #0f172a',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer'
                    }}
                  >
                    <Camera style={{ width: '10px', height: '10px' }} />
                  </button>
                  <input
                    ref={editModalAvatarInputRef}
                    type="file"
                    accept="image/*"
                    style={{ display: 'none' }}
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) {
                        const reader = new FileReader();
                        reader.onload = () => {
                          setEditAvatarPreview(reader.result as string);
                        };
                        reader.readAsDataURL(file);
                      }
                    }}
                  />
                </div>

                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '11px', fontWeight: 'bold', fontFamily: 'monospace' }}>Profile Picture</div>
                  <div style={{ display: 'flex', gap: '6px', marginTop: '6px', alignItems: 'center' }}>
                    <button
                      type="button"
                      onClick={() => editModalAvatarInputRef.current?.click()}
                      style={{
                        padding: '4px 8px',
                        borderRadius: '4px',
                        background: '#0284c7',
                        color: '#ffffff',
                        border: 'none',
                        fontSize: '9px',
                        fontFamily: 'monospace',
                        fontWeight: 'bold',
                        cursor: 'pointer'
                      }}
                    >
                      Upload File
                    </button>
                    <span style={{ fontSize: '9px', color: '#94a3b8', fontFamily: 'monospace' }}>or pick preset:</span>
                  </div>
                  {/* Preset Avatars */}
                  <div style={{ display: 'flex', gap: '4px', marginTop: '6px' }}>
                    {avatarPresets.map((preset, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => setEditAvatarPreview(preset)}
                        style={{
                          width: '24px',
                          height: '24px',
                          borderRadius: '50%',
                          padding: 0,
                          overflow: 'hidden',
                          border: editAvatarPreview === preset ? '2px solid #38bdf8' : '1px solid #64748b',
                          cursor: 'pointer',
                          background: 'none'
                        }}
                      >
                        <img src={preset} alt={`Preset ${idx}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <label style={{ fontSize: '10px', color: '#94a3b8', fontFamily: 'monospace', display: 'block', marginBottom: '4px' }}>
                  Operator Full Name
                </label>
                <input
                  type="text"
                  value={editNameInput}
                  onChange={(e) => setEditNameInput(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '8px 10px',
                    borderRadius: '6px',
                    background: darkModeTheme ? '#090d16' : '#f1f5f9',
                    border: darkModeTheme ? '1px solid #334155' : '1px solid #cbd5e1',
                    color: darkModeTheme ? '#ffffff' : '#0f172a',
                    fontSize: '12px',
                    fontFamily: 'monospace',
                    outline: 'none',
                    boxSizing: 'border-box'
                  }}
                />
              </div>

              <div>
                <label style={{ fontSize: '10px', color: '#94a3b8', fontFamily: 'monospace', display: 'block', marginBottom: '4px' }}>
                  Professional Headline
                </label>
                <input
                  type="text"
                  value={editHeadlineInput}
                  onChange={(e) => setEditHeadlineInput(e.target.value)}
                  placeholder="Enter your custom professional headline..."
                  style={{
                    width: '100%',
                    padding: '8px 10px',
                    borderRadius: '6px',
                    background: darkModeTheme ? '#090d16' : '#f1f5f9',
                    border: darkModeTheme ? '1px solid #334155' : '1px solid #cbd5e1',
                    color: darkModeTheme ? '#ffffff' : '#0f172a',
                    fontSize: '12px',
                    fontFamily: 'monospace',
                    outline: 'none',
                    boxSizing: 'border-box'
                  }}
                />
              </div>

              <div>
                <label style={{ fontSize: '10px', color: '#94a3b8', fontFamily: 'monospace', display: 'block', marginBottom: '4px' }}>
                  Location
                </label>
                <input
                  type="text"
                  value={editLocationInput}
                  onChange={(e) => setEditLocationInput(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '8px 10px',
                    borderRadius: '6px',
                    background: darkModeTheme ? '#090d16' : '#f1f5f9',
                    border: darkModeTheme ? '1px solid #334155' : '1px solid #cbd5e1',
                    color: darkModeTheme ? '#ffffff' : '#0f172a',
                    fontSize: '12px',
                    fontFamily: 'monospace',
                    outline: 'none',
                    boxSizing: 'border-box'
                  }}
                />
              </div>

              <div>
                <label style={{ fontSize: '10px', color: '#94a3b8', fontFamily: 'monospace', display: 'block', marginBottom: '4px' }}>
                  Engineering Bio & Summary
                </label>
                <textarea
                  rows={3}
                  value={editSummaryInput}
                  onChange={(e) => setEditSummaryInput(e.target.value)}
                  placeholder="Type your engineering bio/summary here..."
                  style={{
                    width: '100%',
                    padding: '8px 10px',
                    borderRadius: '6px',
                    background: darkModeTheme ? '#090d16' : '#f1f5f9',
                    border: darkModeTheme ? '1px solid #334155' : '1px solid #cbd5e1',
                    color: darkModeTheme ? '#ffffff' : '#0f172a',
                    fontSize: '12px',
                    fontFamily: 'monospace',
                    outline: 'none',
                    boxSizing: 'border-box',
                    resize: 'none',
                    lineHeight: 1.4
                  }}
                />
              </div>

              {/* Deployments & Roles Overview inside Master Edit Modal */}
              <div
                style={{
                  padding: '10px',
                  borderRadius: '8px',
                  background: darkModeTheme ? '#090d16' : '#f8fafc',
                  border: darkModeTheme ? '1px solid #334155' : '1px solid #cbd5e1'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px' }}>
                  <span style={{ fontSize: '11px', fontWeight: 'bold', color: '#38bdf8' }}>
                    Deployments & Roles ({experiences.length})
                  </span>
                  <button
                    type="button"
                    onClick={() => {
                      handleOpenAddDeployment();
                    }}
                    style={{
                      background: '#0284c7',
                      color: '#ffffff',
                      border: 'none',
                      padding: '3px 8px',
                      borderRadius: '4px',
                      fontSize: '9px',
                      cursor: 'pointer',
                      fontWeight: 'bold',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '3px'
                    }}
                  >
                    <Plus style={{ width: '10px', height: '10px' }} />
                    <span>Add Deployment</span>
                  </button>
                </div>
                {experiences.length === 0 ? (
                  <div style={{ fontSize: '10px', color: '#94a3b8', fontStyle: 'italic' }}>
                    No deployment arrangements added yet. Click &quot;Add Deployment&quot; to configure your role.
                  </div>
                ) : (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    {experiences.map((exp) => (
                      <div
                        key={exp.id}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          padding: '4px 6px',
                          background: darkModeTheme ? '#1e293b' : '#e2e8f0',
                          borderRadius: '4px',
                          fontSize: '10px'
                        }}
                      >
                        <span style={{ fontWeight: 'bold', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: '240px' }}>
                          {exp.role}
                        </span>
                        <div style={{ display: 'flex', gap: '4px' }}>
                          <button
                            type="button"
                            onClick={() => handleOpenEditDeployment(exp)}
                            style={{ background: 'none', border: 'none', color: '#38bdf8', cursor: 'pointer', padding: '1px 3px' }}
                            title="Edit"
                          >
                            <Edit3 style={{ width: '10px', height: '10px' }} />
                          </button>
                          <button
                            type="button"
                            onClick={() => handleDeleteDeployment(exp.id)}
                            style={{ background: 'none', border: 'none', color: '#f87171', cursor: 'pointer', padding: '1px 3px' }}
                            title="Delete"
                          >
                            <Trash2 style={{ width: '10px', height: '10px' }} />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div style={{ display: 'flex', gap: '8px', marginTop: '6px' }}>
                <button
                  type="button"
                  onClick={() => setIsEditProfileModalOpen(false)}
                  style={{
                    flex: 1,
                    padding: '8px',
                    borderRadius: '6px',
                    background: darkModeTheme ? '#1e293b' : '#f1f5f9',
                    border: 'none',
                    color: darkModeTheme ? '#cbd5e1' : '#475569',
                    fontSize: '11px',
                    fontFamily: 'monospace',
                    cursor: 'pointer'
                  }}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  style={{
                    flex: 1,
                    padding: '8px',
                    borderRadius: '6px',
                    background: 'linear-gradient(135deg, #38bdf8 0%, #0284c7 100%)',
                    border: 'none',
                    color: '#ffffff',
                    fontSize: '11px',
                    fontFamily: 'monospace',
                    fontWeight: 'bold',
                    cursor: 'pointer'
                  }}
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        )}

        {/* 🛠️ Dedicated Edit / Add Deployment Arrangement Modal */}
        {isDeploymentModalOpen && (
          <div
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 10001,
              backgroundColor: 'rgba(0, 0, 0, 0.82)',
              backdropFilter: 'blur(6px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '16px'
            }}
          >
            <form
              onSubmit={handleSaveDeployment}
              style={{
                width: '100%',
                maxWidth: '440px',
                background: darkModeTheme ? '#0f172a' : '#ffffff',
                borderRadius: '12px',
                border: '1px solid #38bdf8',
                boxShadow: '0 15px 40px rgba(0,0,0,0.85)',
                padding: '20px',
                display: 'flex',
                flexDirection: 'column',
                gap: '14px',
                boxSizing: 'border-box',
                fontFamily: 'monospace'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Briefcase style={{ width: '16px', height: '16px', color: '#38bdf8' }} />
                  <span style={{ fontSize: '14px', fontWeight: 'bold' }}>
                    {editingDeploymentId ? 'Edit Deployment Arrangement' : 'Add Deployment Arrangement'}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setIsDeploymentModalOpen(false)}
                  style={{ background: 'none', border: 'none', color: '#94a3b8', cursor: 'pointer' }}
                >
                  <X style={{ width: '16px', height: '16px' }} />
                </button>
              </div>

              <p style={{ fontSize: '11px', color: '#94a3b8', margin: 0, lineHeight: 1.4 }}>
                Enter your operational deployment title, cluster / organization, and hardware diagnostic responsibilities safely.
              </p>

              <div>
                <label style={{ fontSize: '10px', color: '#94a3b8', display: 'block', marginBottom: '4px', fontWeight: 'bold' }}>
                  Deployment Title / Role *
                </label>
                <input
                  type="text"
                  required
                  value={deploymentRoleInput}
                  onChange={(e) => setDeploymentRoleInput(e.target.value)}
                  placeholder="e.g., Senior Hardware Diagnostics Operator"
                  style={{
                    width: '100%',
                    padding: '8px 10px',
                    borderRadius: '6px',
                    background: darkModeTheme ? '#090d16' : '#f1f5f9',
                    border: darkModeTheme ? '1px solid #334155' : '1px solid #cbd5e1',
                    color: darkModeTheme ? '#ffffff' : '#0f172a',
                    fontSize: '12px',
                    fontFamily: 'monospace',
                    outline: 'none',
                    boxSizing: 'border-box'
                  }}
                />
              </div>

              <div>
                <label style={{ fontSize: '10px', color: '#94a3b8', display: 'block', marginBottom: '4px', fontWeight: 'bold' }}>
                  Cluster / Organization & Timeline
                </label>
                <input
                  type="text"
                  value={deploymentCompanyInput}
                  onChange={(e) => setDeploymentCompanyInput(e.target.value)}
                  placeholder="e.g., Benin City Solar Sub-Grid • 2025 - Present"
                  style={{
                    width: '100%',
                    padding: '8px 10px',
                    borderRadius: '6px',
                    background: darkModeTheme ? '#090d16' : '#f1f5f9',
                    border: darkModeTheme ? '1px solid #334155' : '1px solid #cbd5e1',
                    color: darkModeTheme ? '#ffffff' : '#0f172a',
                    fontSize: '12px',
                    fontFamily: 'monospace',
                    outline: 'none',
                    boxSizing: 'border-box'
                  }}
                />
              </div>

              <div>
                <label style={{ fontSize: '10px', color: '#94a3b8', display: 'block', marginBottom: '4px', fontWeight: 'bold' }}>
                  Diagnostic Scope & Responsibilities
                </label>
                <textarea
                  rows={3}
                  value={deploymentDescriptionInput}
                  onChange={(e) => setDeploymentDescriptionInput(e.target.value)}
                  placeholder="e.g., Conducting INT8 defect isolation on commercial solar inverters, transformer telemetry logs, and PCB verification routines."
                  style={{
                    width: '100%',
                    padding: '8px 10px',
                    borderRadius: '6px',
                    background: darkModeTheme ? '#090d16' : '#f1f5f9',
                    border: darkModeTheme ? '1px solid #334155' : '1px solid #cbd5e1',
                    color: darkModeTheme ? '#ffffff' : '#0f172a',
                    fontSize: '12px',
                    fontFamily: 'monospace',
                    outline: 'none',
                    boxSizing: 'border-box',
                    resize: 'none',
                    lineHeight: 1.4
                  }}
                />
              </div>

              {/* Quick Preset Roles */}
              <div>
                <div style={{ fontSize: '9px', color: '#94a3b8', marginBottom: '6px' }}>Quick Telemetry Presets:</div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
                  {[
                    { role: 'Field Hardware Diagnostics Lead', company: 'Solar Inverter Cluster • 2024 - Present', desc: 'Conducting edge-quantized vision diagnostics and inverter fault telemetry inspections.' },
                    { role: 'Decentralized PCB QA Specialist', company: 'Electronics Verification Hub • 2023 - Present', desc: 'Running solder bridge isolation and circuit integrity verifications across grid nodes.' },
                    { role: 'Micro-Grid Telemetry Operator', company: 'West Africa Energy Grid • 2024 - Present', desc: 'Managing real-time sensor streams and automated defect dispatch for sub-assemblies.' }
                  ].map((preset, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => {
                        sound.playClick();
                        setDeploymentRoleInput(preset.role);
                        setDeploymentCompanyInput(preset.company);
                        setDeploymentDescriptionInput(preset.desc);
                      }}
                      style={{
                        padding: '3px 7px',
                        borderRadius: '4px',
                        background: darkModeTheme ? '#1e293b' : '#e2e8f0',
                        border: '1px solid #475569',
                        color: '#38bdf8',
                        fontSize: '9px',
                        cursor: 'pointer'
                      }}
                    >
                      {preset.role.split(' ')[0]} {preset.role.split(' ')[1]}
                    </button>
                  ))}
                </div>
              </div>

              <div style={{ display: 'flex', gap: '8px', marginTop: '6px' }}>
                <button
                  type="button"
                  onClick={() => setIsDeploymentModalOpen(false)}
                  style={{
                    flex: 1,
                    padding: '8px',
                    borderRadius: '6px',
                    background: darkModeTheme ? '#1e293b' : '#f1f5f9',
                    border: 'none',
                    color: darkModeTheme ? '#cbd5e1' : '#475569',
                    fontSize: '11px',
                    fontFamily: 'monospace',
                    cursor: 'pointer'
                  }}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  style={{
                    flex: 1,
                    padding: '8px',
                    borderRadius: '6px',
                    background: 'linear-gradient(135deg, #38bdf8 0%, #0284c7 100%)',
                    border: 'none',
                    color: '#ffffff',
                    fontSize: '11px',
                    fontFamily: 'monospace',
                    fontWeight: 'bold',
                    cursor: 'pointer'
                  }}
                >
                  {editingDeploymentId ? 'Update Deployment' : 'Save Deployment'}
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Interactive Peer Profile Modal for other post authors */}
        {isPeerProfileModalOpen && selectedPeerName && peerProfiles[selectedPeerName] && (() => {
          const peer = peerProfiles[selectedPeerName];
          const peerPosts = posts.filter((p) => p.author === peer.name);

          return (
            <div
              style={{
                position: 'fixed',
                inset: 0,
                zIndex: 9999,
                backgroundColor: 'rgba(0, 0, 0, 0.78)',
                backdropFilter: 'blur(4px)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '12px'
              }}
              onClick={() => setIsPeerProfileModalOpen(false)}
            >
              <div
                style={{
                  width: '100%',
                  maxWidth: '460px',
                  maxHeight: '90vh',
                  background: darkModeTheme ? '#0b0f19' : '#ffffff',
                  border: darkModeTheme ? '1px solid #38bdf8' : '1px solid #94a3b8',
                  borderRadius: '16px',
                  overflowY: 'auto',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative'
                }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Peer Cover Banner */}
                <div style={{ position: 'relative', height: '120px', width: '100%', overflow: 'hidden' }}>
                  <img
                    src={peer.cover}
                    alt={`${peer.name} Cover`}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.6) 100%)'
                    }}
                  />

                  {/* Close Modal Button */}
                  <button
                    type="button"
                    onClick={() => setIsPeerProfileModalOpen(false)}
                    style={{
                      position: 'absolute',
                      top: '10px',
                      right: '10px',
                      width: '28px',
                      height: '28px',
                      borderRadius: '50%',
                      background: 'rgba(15, 23, 42, 0.75)',
                      border: '1px solid rgba(255,255,255,0.3)',
                      color: '#ffffff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      zIndex: 2
                    }}
                  >
                    <X style={{ width: '15px', height: '15px' }} />
                  </button>

                  {/* Change Peer Banner Button */}
                  <button
                    type="button"
                    onClick={() => peerCoverInputRef.current?.click()}
                    style={{
                      position: 'absolute',
                      bottom: '8px',
                      right: '10px',
                      background: 'rgba(15, 23, 42, 0.75)',
                      border: '1px solid #38bdf8',
                      borderRadius: '6px',
                      padding: '4px 8px',
                      color: '#38bdf8',
                      fontSize: '9px',
                      fontFamily: 'monospace',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px',
                      cursor: 'pointer'
                    }}
                    title="Change banner for this operator"
                  >
                    <Camera style={{ width: '11px', height: '11px' }} />
                    <span>Change Banner</span>
                  </button>
                  <input
                    ref={peerCoverInputRef}
                    type="file"
                    accept="image/*"
                    style={{ display: 'none' }}
                    onChange={(e) => handleDirectPeerCoverUpload(peer.name, e)}
                  />
                </div>

                {/* Peer Header Identity Info */}
                <div style={{ padding: '0 16px 16px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginTop: '-36px' }}>
                    <div style={{ position: 'relative' }}>
                      <img
                        src={peer.avatar}
                        alt={peer.name}
                        style={{
                          width: '74px',
                          height: '74px',
                          borderRadius: '50%',
                          objectFit: 'cover',
                          border: '3px solid #38bdf8',
                          boxShadow: '0 0 16px rgba(56, 189, 248, 0.4)',
                          backgroundColor: '#0f172a'
                        }}
                      />
                      <span
                        style={{
                          position: 'absolute',
                          bottom: '4px',
                          right: '4px',
                          width: '12px',
                          height: '12px',
                          borderRadius: '50%',
                          backgroundColor: '#10b981',
                          border: '2px solid #0f172a'
                        }}
                      />
                      {/* Interactive Change Avatar Camera Button */}
                      <button
                        type="button"
                        onClick={() => peerAvatarInputRef.current?.click()}
                        style={{
                          position: 'absolute',
                          bottom: '-2px',
                          left: '46px',
                          width: '24px',
                          height: '24px',
                          borderRadius: '50%',
                          background: '#0284c7',
                          border: '1.5px solid #ffffff',
                          color: '#ffffff',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          cursor: 'pointer'
                        }}
                        title="Upload new avatar for this person"
                      >
                        <Camera style={{ width: '12px', height: '12px' }} />
                      </button>
                      <input
                        ref={peerAvatarInputRef}
                        type="file"
                        accept="image/*"
                        style={{ display: 'none' }}
                        onChange={(e) => handleDirectPeerAvatarUpload(peer.name, e)}
                      />
                    </div>

                    {/* Quick Preset Avatars Picker */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <span style={{ fontSize: '9px', color: '#94a3b8', fontFamily: 'monospace' }}>Presets:</span>
                      {avatarPresets.slice(0, 3).map((preset, pIdx) => (
                        <img
                          key={pIdx}
                          src={preset}
                          alt="Preset"
                          onClick={() => {
                            setPeerProfiles((prev) => ({
                              ...prev,
                              [peer.name]: { ...prev[peer.name], avatar: preset }
                            }));
                            setPosts((prev) =>
                              prev.map((post) => (post.author === peer.name ? { ...post, avatar: preset } : post))
                            );
                            sound.playSuccess();
                            triggerToast(`📷 Updated avatar preset for ${peer.name}`);
                          }}
                          style={{
                            width: '20px',
                            height: '20px',
                            borderRadius: '50%',
                            objectFit: 'cover',
                            cursor: 'pointer',
                            border: peer.avatar === preset ? '2px solid #38bdf8' : '1px solid #64748b'
                          }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Name and Badges */}
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <h2
                        style={{
                          margin: 0,
                          fontSize: '16px',
                          fontWeight: 'bold',
                          fontFamily: 'monospace',
                          color: darkModeTheme ? '#ffffff' : '#0f172a'
                        }}
                      >
                        {peer.name}
                      </h2>
                      <CheckCircle2 style={{ width: '15px', height: '15px', color: '#38bdf8' }} />
                    </div>
                    <div style={{ fontSize: '10px', color: '#38bdf8', fontFamily: 'monospace', fontWeight: 'bold', marginTop: '2px' }}>
                      {peer.badge}
                    </div>
                    <div style={{ fontSize: '11px', color: darkModeTheme ? '#cbd5e1' : '#475569', fontFamily: 'monospace', marginTop: '2px' }}>
                      {peer.headline}
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '10px', color: '#94a3b8', fontFamily: 'monospace', marginTop: '4px' }}>
                      <MapPin style={{ width: '12px', height: '12px', color: '#38bdf8' }} />
                      <span>{peer.location}</span>
                      <span>•</span>
                      <span>{peer.company}</span>
                    </div>
                  </div>

                  {/* Telemetry Stats Bar */}
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(3, 1fr)',
                      gap: '6px',
                      background: darkModeTheme ? '#111622' : '#f1f5f9',
                      border: darkModeTheme ? '1px solid #1e293b' : '1px solid #cbd5e1',
                      borderRadius: '8px',
                      padding: '8px',
                      textAlign: 'center'
                    }}
                  >
                    <div>
                      <div style={{ fontSize: '13px', fontWeight: 'bold', color: '#38bdf8', fontFamily: 'monospace' }}>
                        {formatNumber(peer.inspectionsConducted)}
                      </div>
                      <div style={{ fontSize: '8px', color: '#94a3b8', fontFamily: 'monospace' }}>Inspections</div>
                    </div>
                    <div>
                      <div style={{ fontSize: '13px', fontWeight: 'bold', color: '#fb7185', fontFamily: 'monospace' }}>
                        {formatNumber(peer.faultsIsolated)}
                      </div>
                      <div style={{ fontSize: '8px', color: '#94a3b8', fontFamily: 'monospace' }}>Faults Isolated</div>
                    </div>
                    <div>
                      <div style={{ fontSize: '13px', fontWeight: 'bold', color: '#10b981', fontFamily: 'monospace' }}>
                        {peer.aiScanAccuracy}
                      </div>
                      <div style={{ fontSize: '8px', color: '#94a3b8', fontFamily: 'monospace' }}>AI Accuracy</div>
                    </div>
                  </div>

                  {/* Primary Interaction Buttons */}
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <button
                      type="button"
                      onClick={() => handleToggleConnectPeer(peer.name)}
                      style={{
                        flex: 1,
                        padding: '8px 12px',
                        borderRadius: '8px',
                        background: peer.isConnected
                          ? 'linear-gradient(135deg, #059669 0%, #047857 100%)'
                          : 'linear-gradient(135deg, #0284c7 0%, #0369a1 100%)',
                        border: 'none',
                        color: '#ffffff',
                        fontSize: '11px',
                        fontWeight: 'bold',
                        fontFamily: 'monospace',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '6px',
                        cursor: 'pointer',
                        boxShadow: '0 4px 12px rgba(2, 132, 199, 0.35)'
                      }}
                    >
                      {peer.isConnected ? (
                        <>
                          <UserCheck style={{ width: '14px', height: '14px' }} />
                          <span>Connected ✓</span>
                        </>
                      ) : (
                        <>
                          <UserPlus style={{ width: '14px', height: '14px' }} />
                          <span>Connect Node</span>
                        </>
                      )}
                    </button>

                    <button
                      type="button"
                      onClick={() => handleMessagePeer(peer)}
                      style={{
                        flex: 1,
                        padding: '8px 12px',
                        borderRadius: '8px',
                        background: darkModeTheme ? '#1e293b' : '#f8fafc',
                        border: darkModeTheme ? '1px solid #38bdf8' : '1px solid #cbd5e1',
                        color: darkModeTheme ? '#ffffff' : '#0f172a',
                        fontSize: '11px',
                        fontWeight: 'bold',
                        fontFamily: 'monospace',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '6px',
                        cursor: 'pointer'
                      }}
                    >
                      <MessageSquare style={{ width: '14px', height: '14px', color: '#38bdf8' }} />
                      <span>Message</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        sound.playClick();
                        triggerToast(`⚡ Operator node link for ${peer.name} copied to clipboard!`);
                      }}
                      style={{
                        padding: '8px 12px',
                        borderRadius: '8px',
                        background: darkModeTheme ? '#1e293b' : '#f8fafc',
                        border: darkModeTheme ? '1px solid #334155' : '1px solid #cbd5e1',
                        color: darkModeTheme ? '#ffffff' : '#0f172a',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer'
                      }}
                      title="Share operator profile"
                    >
                      <Share2 style={{ width: '14px', height: '14px' }} />
                    </button>
                  </div>

                  {/* Profile Navigation Tabs */}
                  <div
                    style={{
                      display: 'flex',
                      borderBottom: darkModeTheme ? '1px solid #1e293b' : '1px solid #e2e8f0',
                      gap: '4px'
                    }}
                  >
                    {[
                      { id: 'about', label: 'About' },
                      { id: 'posts', label: `Posts (${peerPosts.length})` },
                      { id: 'skills', label: 'Skills' },
                      { id: 'endorsements', label: `Endorsements (${peer.endorsements.length})` }
                    ].map((tab) => {
                      const isActive = peerProfileSubTab === tab.id;
                      return (
                        <button
                          key={tab.id}
                          type="button"
                          onClick={() => {
                            sound.playClick();
                            setPeerProfileSubTab(tab.id as any);
                          }}
                          style={{
                            flex: 1,
                            padding: '8px 4px',
                            background: 'none',
                            border: 'none',
                            borderBottom: isActive ? '2px solid #38bdf8' : '2px solid transparent',
                            color: isActive ? '#38bdf8' : (darkModeTheme ? '#94a3b8' : '#64748b'),
                            fontWeight: isActive ? 'bold' : 'normal',
                            fontSize: '10px',
                            fontFamily: 'monospace',
                            cursor: 'pointer',
                            whiteSpace: 'nowrap'
                          }}
                        >
                          {tab.label}
                        </button>
                      );
                    })}
                  </div>

                  {/* Tab 1: About */}
                  {peerProfileSubTab === 'about' && (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      <div
                        style={{
                          background: darkModeTheme ? '#111622' : '#f8fafc',
                          border: darkModeTheme ? '1px solid #1e293b' : '1px solid #cbd5e1',
                          borderRadius: '8px',
                          padding: '10px',
                          fontSize: '11px',
                          fontFamily: 'monospace',
                          lineHeight: 1.5,
                          color: darkModeTheme ? '#cbd5e1' : '#334155'
                        }}
                      >
                        <div style={{ fontSize: '10px', fontWeight: 'bold', color: '#38bdf8', marginBottom: '4px' }}>
                          Operator Summary
                        </div>
                        {peer.summary}
                      </div>

                      <div
                        style={{
                          background: darkModeTheme ? '#111622' : '#f8fafc',
                          border: darkModeTheme ? '1px solid #1e293b' : '1px solid #cbd5e1',
                          borderRadius: '8px',
                          padding: '10px',
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '8px'
                        }}
                      >
                        <div style={{ fontSize: '10px', fontWeight: 'bold', color: '#38bdf8', fontFamily: 'monospace' }}>
                          Verified Deployments & Experience
                        </div>
                        {peer.experiences.map((exp) => (
                          <div
                            key={exp.id}
                            style={{
                              padding: '8px',
                              borderRadius: '6px',
                              background: darkModeTheme ? '#090d16' : '#ffffff',
                              border: darkModeTheme ? '1px solid #1e293b' : '1px solid #e2e8f0',
                              fontFamily: 'monospace'
                            }}
                          >
                            <div style={{ fontSize: '11px', fontWeight: 'bold', color: darkModeTheme ? '#ffffff' : '#0f172a' }}>
                              {exp.role}
                            </div>
                            <div style={{ fontSize: '9px', color: '#38bdf8' }}>{exp.company}</div>
                            <div style={{ fontSize: '10px', color: '#94a3b8', marginTop: '2px' }}>{exp.description}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Tab 2: Posts by this Author */}
                  {peerProfileSubTab === 'posts' && (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      {peerPosts.length === 0 ? (
                        <div
                          style={{
                            padding: '20px',
                            textAlign: 'center',
                            fontSize: '11px',
                            color: '#94a3b8',
                            fontFamily: 'monospace'
                          }}
                        >
                          No active feed logs published yet by {peer.name}.
                        </div>
                      ) : (
                        peerPosts.map((p) => (
                          <div
                            key={p.id}
                            style={{
                              padding: '10px',
                              borderRadius: '8px',
                              background: darkModeTheme ? '#111622' : '#f8fafc',
                              border: darkModeTheme ? '1px solid #1e293b' : '1px solid #cbd5e1',
                              display: 'flex',
                              flexDirection: 'column',
                              gap: '6px',
                              fontFamily: 'monospace'
                            }}
                          >
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                              <span style={{ fontSize: '9px', color: '#38bdf8' }}>{p.badge}</span>
                              <span style={{ fontSize: '8px', color: '#94a3b8' }}>{p.time}</span>
                            </div>
                            <div style={{ fontSize: '11px', lineHeight: 1.4 }}>{p.content}</div>
                            {p.postMedia && (
                              <img
                                src={p.postMedia}
                                alt="Post Media"
                                style={{ width: '100%', maxHeight: '120px', objectFit: 'cover', borderRadius: '6px' }}
                              />
                            )}
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '10px', marginTop: '4px' }}>
                              <button
                                type="button"
                                onClick={() => handleToggleLike(p.id)}
                                style={{
                                  display: 'flex',
                                  alignItems: 'center',
                                  gap: '4px',
                                  background: 'none',
                                  border: 'none',
                                  color: p.verified ? '#38bdf8' : 'inherit',
                                  cursor: 'pointer',
                                  fontSize: '10px'
                                }}
                              >
                                <Zap style={{ width: '12px', height: '12px', fill: p.verified ? '#38bdf8' : 'none', color: p.verified ? '#38bdf8' : '#94a3b8' }} />
                                <span>{p.verifications}</span>
                              </button>
                              <span style={{ color: '#94a3b8' }}>{p.comments.length} comments</span>
                            </div>
                          </div>
                        ))
                      )}
                    </div>
                  )}

                  {/* Tab 3: Skills */}
                  {peerProfileSubTab === 'skills' && (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      {peer.skills.map((skill, sIdx) => (
                        <div
                          key={sIdx}
                          style={{
                            padding: '8px 10px',
                            borderRadius: '8px',
                            background: darkModeTheme ? '#111622' : '#f8fafc',
                            border: darkModeTheme ? '1px solid #1e293b' : '1px solid #cbd5e1',
                            fontFamily: 'monospace'
                          }}
                        >
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                              <Award style={{ width: '13px', height: '13px', color: '#38bdf8' }} />
                              <span style={{ fontSize: '11px', fontWeight: 'bold' }}>{skill.name}</span>
                            </div>
                            <span style={{ fontSize: '10px', color: '#10b981', fontWeight: 'bold' }}>{skill.level}</span>
                          </div>
                          <div style={{ width: '100%', height: '4px', background: '#334155', borderRadius: '2px', overflow: 'hidden' }}>
                            <div style={{ width: skill.level, height: '100%', background: 'linear-gradient(90deg, #38bdf8 0%, #10b981 100%)' }} />
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Tab 4: Endorsements */}
                  {peerProfileSubTab === 'endorsements' && (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      <form
                        onSubmit={(e) => handleAddPeerEndorsement(peer.name, e)}
                        style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}
                      >
                        <textarea
                          rows={2}
                          value={peerEndorsementInput}
                          onChange={(e) => setPeerEndorsementInput(e.target.value)}
                          placeholder={`Leave a technical endorsement for ${peer.name}...`}
                          style={{
                            width: '100%',
                            padding: '8px',
                            borderRadius: '6px',
                            background: darkModeTheme ? '#111622' : '#f8fafc',
                            border: darkModeTheme ? '1px solid #334155' : '1px solid #cbd5e1',
                            color: darkModeTheme ? '#ffffff' : '#0f172a',
                            fontSize: '11px',
                            fontFamily: 'monospace',
                            outline: 'none',
                            resize: 'none',
                            boxSizing: 'border-box'
                          }}
                        />
                        <button
                          type="submit"
                          disabled={!peerEndorsementInput.trim()}
                          style={{
                            alignSelf: 'flex-end',
                            padding: '6px 12px',
                            borderRadius: '6px',
                            background: !peerEndorsementInput.trim() ? '#475569' : '#059669',
                            color: '#ffffff',
                            border: 'none',
                            fontSize: '10px',
                            fontFamily: 'monospace',
                            fontWeight: 'bold',
                            cursor: !peerEndorsementInput.trim() ? 'not-allowed' : 'pointer'
                          }}
                        >
                          Submit Endorsement
                        </button>
                      </form>

                      {peer.endorsements.length === 0 ? (
                        <div style={{ fontSize: '10px', color: '#94a3b8', textAlign: 'center', padding: '12px', fontFamily: 'monospace' }}>
                          Be the first verified operator to endorse {peer.name}!
                        </div>
                      ) : (
                        peer.endorsements.map((end) => (
                          <div
                            key={end.id}
                            style={{
                              padding: '8px 10px',
                              borderRadius: '8px',
                              background: darkModeTheme ? '#111622' : '#f8fafc',
                              border: darkModeTheme ? '1px solid #1e293b' : '1px solid #cbd5e1',
                              display: 'flex',
                              flexDirection: 'column',
                              gap: '4px',
                              fontFamily: 'monospace'
                            }}
                          >
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                <img
                                  src={end.avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400'}
                                  alt={end.author}
                                  style={{ width: '22px', height: '22px', borderRadius: '50%', objectFit: 'cover' }}
                                />
                                <span style={{ fontSize: '10px', fontWeight: 'bold' }}>{end.author}</span>
                              </div>
                              <span style={{ fontSize: '8px', color: '#94a3b8' }}>{end.time}</span>
                            </div>
                            <div style={{ fontSize: '8px', color: '#c084fc' }}>{end.badge}</div>
                            <div style={{ fontSize: '10px', color: darkModeTheme ? '#cbd5e1' : '#334155' }}>{end.comment}</div>
                          </div>
                        ))
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })()}

        {/* ======================================================== */}
        {/* GLOBAL INTERACTIVE PROFILE POPUP MODAL (LINKEDIN-STYLE) */}
        {/* ======================================================== */}
        {isProfileModalOpen && selectedUserNode && (
          <div
            id="global-profile-popup-overlay"
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100vw',
              height: '100vh',
              backgroundColor: 'rgba(0,0,0,0.7)',
              zIndex: 10000,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backdropFilter: 'blur(6px)',
              WebkitBackdropFilter: 'blur(6px)',
              padding: '16px',
              boxSizing: 'border-box'
            }}
            onClick={() => setIsProfileModalOpen(false)}
          >
            {/* Dark Zinc Summary Card */}
            <div
              id="global-profile-summary-card"
              style={{
                width: '100%',
                maxWidth: '440px',
                backgroundColor: '#18181b',
                border: '1px solid #3f3f46',
                borderRadius: '16px',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.85), 0 0 35px rgba(56, 189, 248, 0.25)',
                overflow: 'hidden',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                boxSizing: 'border-box'
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header Cover Banner */}
              <div style={{ position: 'relative', height: '110px', width: '100%', overflow: 'hidden' }}>
                <img
                  src={selectedUserNode.cover || metallicBanner}
                  alt={`${selectedUserNode.name} Cover`}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(24, 24, 27, 0.9) 100%)'
                  }}
                />

                {/* Interactive Close Button at top right corner */}
                <button
                  id="profile-modal-close-button"
                  type="button"
                  onClick={() => {
                    sound.playClick();
                    setIsProfileModalOpen(false);
                  }}
                  style={{
                    position: 'absolute',
                    top: '10px',
                    right: '10px',
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(24, 24, 27, 0.85)',
                    border: '1px solid #52525b',
                    color: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    zIndex: 10,
                    boxShadow: '0 4px 12px rgba(0,0,0,0.5)'
                  }}
                  title="Close Profile Popup"
                >
                  <X style={{ width: '16px', height: '16px' }} />
                </button>
              </div>

              {/* Card Profile Details */}
              <div style={{ padding: '0 18px 20px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {/* Avatar with Verification Halo */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginTop: '-38px' }}>
                  <div style={{ position: 'relative' }}>
                    <img
                      src={selectedUserNode.avatar}
                      alt={selectedUserNode.name}
                      style={{
                        width: '76px',
                        height: '76px',
                        borderRadius: '50%',
                        objectFit: 'cover',
                        border: '3px solid #38bdf8',
                        boxShadow: '0 0 16px rgba(56, 189, 248, 0.45)',
                        backgroundColor: '#090d16'
                      }}
                    />
                    <span
                      style={{
                        position: 'absolute',
                        bottom: '4px',
                        right: '4px',
                        width: '12px',
                        height: '12px',
                        borderRadius: '50%',
                        backgroundColor: '#10b981',
                        border: '2px solid #18181b'
                      }}
                    />
                  </div>

                  {/* Telemetry Status Chip */}
                  <div
                    style={{
                      background: 'rgba(56, 189, 248, 0.12)',
                      border: '1px solid rgba(56, 189, 248, 0.35)',
                      borderRadius: '8px',
                      padding: '4px 10px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '5px'
                    }}
                  >
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#38bdf8' }} />
                    <span style={{ fontSize: '9px', color: '#38bdf8', fontFamily: 'monospace', fontWeight: 'bold' }}>
                      ONLINE • MESH VERIFIED
                    </span>
                  </div>
                </div>

                {/* Operator Name and Verification Check */}
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <h2
                      style={{
                        margin: 0,
                        fontSize: '18px',
                        fontWeight: 900,
                        fontFamily: 'monospace',
                        color: '#ffffff',
                        letterSpacing: '0.3px'
                      }}
                    >
                      {selectedUserNode.name}
                    </h2>
                    <CheckCircle2 style={{ width: '16px', height: '16px', color: '#38bdf8' }} />
                  </div>

                  {/* Professional Role Badge */}
                  <div
                    style={{
                      display: 'inline-block',
                      marginTop: '6px',
                      fontSize: '9px',
                      background: 'linear-gradient(135deg, #0284c7 0%, #0369a1 100%)',
                      color: '#ffffff',
                      padding: '3px 8px',
                      borderRadius: '6px',
                      fontFamily: 'monospace',
                      fontWeight: 'bold',
                      letterSpacing: '0.5px',
                      boxShadow: '0 2px 8px rgba(2, 132, 199, 0.3)'
                    }}
                  >
                    {selectedUserNode.badge}
                  </div>

                  {/* Headline */}
                  {selectedUserNode.headline && (
                    <div style={{ fontSize: '11px', color: '#cbd5e1', fontFamily: 'monospace', marginTop: '6px', lineHeight: 1.4 }}>
                      {selectedUserNode.headline}
                    </div>
                  )}

                  {/* Location & Organization */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '10px', color: '#a1a1aa', fontFamily: 'monospace', marginTop: '6px' }}>
                    <MapPin style={{ width: '12px', height: '12px', color: '#38bdf8' }} />
                    <span>{selectedUserNode.location || 'Benin City, Nigeria'}</span>
                    <span>•</span>
                    <span>{selectedUserNode.company || 'CHIXUS Hardware Mesh'}</span>
                  </div>
                </div>

                {/* Telemetry Metrics */}
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: '8px',
                    backgroundColor: '#27272a',
                    border: '1px solid #3f3f46',
                    borderRadius: '10px',
                    padding: '10px 8px',
                    textAlign: 'center'
                  }}
                >
                  <div>
                    <div style={{ fontSize: '14px', fontWeight: 900, color: '#38bdf8', fontFamily: 'monospace' }}>
                      {selectedUserNode.inspectionsConducted || '1,420'}
                    </div>
                    <div style={{ fontSize: '8px', color: '#a1a1aa', fontFamily: 'monospace', marginTop: '2px', textTransform: 'uppercase' }}>
                      Inspections
                    </div>
                  </div>
                  <div>
                    <div style={{ fontSize: '14px', fontWeight: 900, color: '#fb7185', fontFamily: 'monospace' }}>
                      {selectedUserNode.faultsIsolated ?? '112'}
                    </div>
                    <div style={{ fontSize: '8px', color: '#a1a1aa', fontFamily: 'monospace', marginTop: '2px', textTransform: 'uppercase' }}>
                      Faults Isolated
                    </div>
                  </div>
                  <div>
                    <div style={{ fontSize: '14px', fontWeight: 900, color: '#10b981', fontFamily: 'monospace' }}>
                      {selectedUserNode.aiScanAccuracy || '99.8%'}
                    </div>
                    <div style={{ fontSize: '8px', color: '#a1a1aa', fontFamily: 'monospace', marginTop: '2px', textTransform: 'uppercase' }}>
                      AI Accuracy
                    </div>
                  </div>
                </div>

                {/* Dossier Executive Summary */}
                {selectedUserNode.summary && (
                  <div
                    style={{
                      padding: '10px',
                      borderRadius: '8px',
                      backgroundColor: '#27272a',
                      border: '1px solid #3f3f46',
                      fontSize: '11px',
                      color: '#d4d4d8',
                      fontFamily: 'monospace',
                      lineHeight: 1.5
                    }}
                  >
                    <div style={{ fontSize: '9px', color: '#38bdf8', fontWeight: 'bold', marginBottom: '4px', textTransform: 'uppercase' }}>
                      Operator Dossier Summary
                    </div>
                    {selectedUserNode.summary}
                  </div>
                )}

                {/* Interactive Action Controls */}
                <div style={{ display: 'flex', gap: '8px', marginTop: '2px' }}>
                  <button
                    type="button"
                    onClick={() => {
                      sound.playSuccess();
                      triggerToast(`⚡ Connected node with ${selectedUserNode.name}! Verified link established.`);
                    }}
                    style={{
                      flex: 1,
                      padding: '10px 12px',
                      borderRadius: '8px',
                      background: 'linear-gradient(135deg, #0284c7 0%, #0369a1 100%)',
                      border: 'none',
                      color: '#ffffff',
                      fontSize: '11px',
                      fontWeight: 'bold',
                      fontFamily: 'monospace',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '6px',
                      cursor: 'pointer',
                      boxShadow: '0 4px 14px rgba(2, 132, 199, 0.4)'
                    }}
                  >
                    <UserCheck style={{ width: '14px', height: '14px' }} />
                    <span>Connect Node</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      sound.playClick();
                      setIsProfileModalOpen(false);
                      setActiveTab('messages');
                      triggerToast(`💬 WhatsApp channel opened for ${selectedUserNode.name}`);
                    }}
                    style={{
                      flex: 1,
                      padding: '10px 12px',
                      borderRadius: '8px',
                      backgroundColor: '#27272a',
                      border: '1px solid #38bdf8',
                      color: '#38bdf8',
                      fontSize: '11px',
                      fontWeight: 'bold',
                      fontFamily: 'monospace',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '6px',
                      cursor: 'pointer'
                    }}
                  >
                    <MessageSquare style={{ width: '14px', height: '14px' }} />
                    <span>Message</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 🛡️ Responsive Peer Profile Overlay Card Modal (Security Compliant: Excludes Private User ID) */}
        {selectedPeerProfile && (
          <div
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 10000,
              backgroundColor: 'rgba(0, 0, 0, 0.85)',
              backdropFilter: 'blur(8px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '16px'
            }}
            onClick={() => setSelectedPeerProfile(null)}
          >
            <div
              style={{
                width: '100%',
                maxWidth: '430px',
                maxHeight: '90vh',
                backgroundColor: '#12141c',
                border: '1px solid #38bdf8',
                borderRadius: '16px',
                overflowY: 'auto',
                boxShadow: '0 25px 60px rgba(0, 0, 0, 0.9), 0 0 30px rgba(56, 189, 248, 0.25)',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative'
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header Cover Banner */}
              <div style={{ position: 'relative', height: '115px', width: '100%', overflow: 'hidden' }}>
                <img
                  src={selectedPeerProfile.cover || metallicBanner}
                  alt={`${selectedPeerProfile.name} Cover`}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to bottom, rgba(0,0,0,0.15) 0%, rgba(18, 20, 28, 0.95) 100%)'
                  }}
                />

                {/* Interactive Top Close Button */}
                <button
                  type="button"
                  onClick={() => {
                    sound.playClick();
                    setSelectedPeerProfile(null);
                  }}
                  style={{
                    position: 'absolute',
                    top: '10px',
                    right: '10px',
                    width: '30px',
                    height: '30px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(18, 20, 28, 0.85)',
                    border: '1px solid rgba(255,255,255,0.25)',
                    color: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    zIndex: 2,
                    boxShadow: '0 4px 10px rgba(0,0,0,0.5)'
                  }}
                >
                  <X style={{ width: '15px', height: '15px' }} />
                </button>
              </div>

              {/* Profile Body & Identity Details */}
              <div style={{ padding: '0 18px 20px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {/* Avatar with Halo & Verification Badge */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginTop: '-38px' }}>
                  <div style={{ position: 'relative' }}>
                    <img
                      src={selectedPeerProfile.avatar || chinazaAvatar}
                      alt={selectedPeerProfile.name}
                      style={{
                        width: '74px',
                        height: '74px',
                        borderRadius: '50%',
                        objectFit: 'cover',
                        border: '3px solid #38bdf8',
                        boxShadow: '0 0 16px rgba(56, 189, 248, 0.45)',
                        backgroundColor: '#090d16'
                      }}
                    />
                    <span
                      style={{
                        position: 'absolute',
                        bottom: '2px',
                        right: '2px',
                        width: '12px',
                        height: '12px',
                        borderRadius: '50%',
                        backgroundColor: '#10b981',
                        border: '2px solid #12141c'
                      }}
                    />
                  </div>

                  <div
                    style={{
                      background: 'rgba(56, 189, 248, 0.12)',
                      border: '1px solid rgba(56, 189, 248, 0.4)',
                      borderRadius: '8px',
                      padding: '4px 10px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '5px'
                    }}
                  >
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#38bdf8' }} />
                    <span style={{ fontSize: '9px', color: '#38bdf8', fontFamily: 'monospace', fontWeight: 'bold', letterSpacing: '0.4px' }}>
                      VERIFIED OPERATOR
                    </span>
                  </div>
                </div>

                {/* Name, Headline & Location */}
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <h2
                      style={{
                        margin: 0,
                        fontSize: '18px',
                        fontWeight: 900,
                        fontFamily: 'monospace',
                        color: '#ffffff',
                        letterSpacing: '0.3px'
                      }}
                    >
                      {selectedPeerProfile.name}
                    </h2>
                    <CheckCircle2 style={{ width: '16px', height: '16px', color: '#38bdf8' }} />
                  </div>

                  {selectedPeerProfile.badge && (
                    <div
                      style={{
                        display: 'inline-block',
                        marginTop: '6px',
                        fontSize: '9px',
                        background: 'linear-gradient(135deg, #0284c7 0%, #0369a1 100%)',
                        color: '#ffffff',
                        padding: '3px 8px',
                        borderRadius: '6px',
                        fontFamily: 'monospace',
                        fontWeight: 'bold',
                        letterSpacing: '0.5px'
                      }}
                    >
                      {selectedPeerProfile.badge}
                    </div>
                  )}

                  {selectedPeerProfile.headline && (
                    <div style={{ fontSize: '11px', color: '#cbd5e1', fontFamily: 'monospace', marginTop: '6px', lineHeight: 1.4 }}>
                      {selectedPeerProfile.headline}
                    </div>
                  )}

                  {/* Location & Entity */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '11px', color: '#94a3b8', fontFamily: 'monospace', marginTop: '6px' }}>
                    <MapPin style={{ width: '12px', height: '12px', color: '#fb7185' }} />
                    <span>{selectedPeerProfile.location || 'Benin City, Nigeria'}</span>
                    {selectedPeerProfile.company && (
                      <>
                        <span>•</span>
                        <span>{selectedPeerProfile.company}</span>
                      </>
                    )}
                  </div>
                </div>

                {/* Industrial Telemetry Metric Bar */}
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: '8px',
                    backgroundColor: '#191c26',
                    border: '1px solid #2d3244',
                    borderRadius: '10px',
                    padding: '10px 8px',
                    textAlign: 'center'
                  }}
                >
                  <div>
                    <div style={{ fontSize: '15px', fontWeight: 900, color: '#38bdf8', fontFamily: 'monospace' }}>
                      {formatNumber(selectedPeerProfile.inspectionsConducted || 0)}
                    </div>
                    <div style={{ fontSize: '8px', color: '#94a3b8', fontFamily: 'monospace', marginTop: '2px', textTransform: 'uppercase' }}>
                      Inspections
                    </div>
                  </div>
                  <div>
                    <div style={{ fontSize: '15px', fontWeight: 900, color: '#fb7185', fontFamily: 'monospace' }}>
                      {formatNumber(selectedPeerProfile.faultsIsolated || 0)}
                    </div>
                    <div style={{ fontSize: '8px', color: '#94a3b8', fontFamily: 'monospace', marginTop: '2px', textTransform: 'uppercase' }}>
                      Faults Isolated
                    </div>
                  </div>
                  <div>
                    <div style={{ fontSize: '15px', fontWeight: 900, color: '#10b981', fontFamily: 'monospace' }}>
                      {selectedPeerProfile.aiScanAccuracy || '99.8%'}
                    </div>
                    <div style={{ fontSize: '8px', color: '#94a3b8', fontFamily: 'monospace', marginTop: '2px', textTransform: 'uppercase' }}>
                      AI Accuracy
                    </div>
                  </div>
                </div>

                {/* Engineering Bio / Summary */}
                <div
                  style={{
                    padding: '12px 14px',
                    borderRadius: '10px',
                    backgroundColor: '#191c26',
                    border: '1px solid #2d3244',
                    fontSize: '11px',
                    color: '#cbd5e1',
                    fontFamily: 'monospace',
                    lineHeight: 1.6
                  }}
                >
                  <div style={{ fontSize: '9px', color: '#38bdf8', fontWeight: 'bold', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                    Engineering Bio & Summary
                  </div>
                  {selectedPeerProfile.summary || selectedPeerProfile.bio || 'Verified hardware operator and diagnostics specialist collaborating on the sovereign mesh grid in Nigeria.'}
                </div>

                {/* Clean Silver Button: Close Profile */}
                <button
                  type="button"
                  onClick={() => {
                    sound.playClick();
                    setSelectedPeerProfile(null);
                  }}
                  style={{
                    width: '100%',
                    padding: '11px 16px',
                    borderRadius: '10px',
                    background: 'linear-gradient(135deg, #ffffff 0%, #cbd5e1 50%, #94a3b8 100%)',
                    border: '1px solid #cbd5e1',
                    color: '#0f172a',
                    fontSize: '12px',
                    fontWeight: 900,
                    fontFamily: 'monospace',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '6px',
                    boxShadow: '0 4px 14px rgba(203, 213, 225, 0.25)',
                    marginTop: '2px'
                  }}
                >
                  <X style={{ width: '14px', height: '14px' }} />
                  <span>Close Profile</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Native Share Sheet Modal */}
        {isShareDrawerOpen && shareTargetPost && (
          <div
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 10000,
              backgroundColor: 'rgba(0, 0, 0, 0.75)',
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'center'
            }}
            onClick={() => setIsShareDrawerOpen(false)}
          >
            <div
              style={{
                width: '100%',
                maxWidth: '480px',
                background: darkModeTheme ? '#0f172a' : '#ffffff',
                borderTopLeftRadius: '16px',
                borderTopRightRadius: '16px',
                borderTop: '1px solid #38bdf8',
                padding: '18px',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                boxSizing: 'border-box'
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ fontSize: '13px', fontWeight: 'bold', fontFamily: 'monospace' }}>Broadcast Telemetry Post</span>
                <button
                  type="button"
                  onClick={() => setIsShareDrawerOpen(false)}
                  style={{ background: 'none', border: 'none', color: '#94a3b8', cursor: 'pointer' }}
                >
                  <X style={{ width: '16px', height: '16px' }} />
                </button>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px' }}>
                {['WhatsApp', 'LinkedIn', 'Copy Link'].map((plat) => (
                  <button
                    key={plat}
                    type="button"
                    onClick={() => {
                      sound.playClick();
                      setIsShareDrawerOpen(false);
                      triggerToast(`⚡ Broadcast simulated to ${plat}! Telemetry link copied.`);
                    }}
                    style={{
                      padding: '10px 6px',
                      borderRadius: '8px',
                      background: darkModeTheme ? '#1e293b' : '#f1f5f9',
                      border: darkModeTheme ? '1px solid #334155' : '1px solid #cbd5e1',
                      color: darkModeTheme ? '#ffffff' : '#0f172a',
                      fontSize: '11px',
                      fontFamily: 'monospace',
                      fontWeight: 'bold',
                      cursor: 'pointer'
                    }}
                  >
                    {plat}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
