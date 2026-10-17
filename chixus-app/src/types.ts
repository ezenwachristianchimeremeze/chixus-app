export interface Operator {
  nodeId: string;
  fourDigitCode: string; // The irreversible 4-digit code (birth year or unforgettable PIN)
  sector: string;
  avatarSeed: string;
  createdAt: string;
  verifiedCount: number;
  chixusLawAccepted: boolean;
}

export interface DefectItem {
  id: string;
  type: 'Cold Joint' | 'Solder Bridge' | 'Tombstoning' | 'Insufficient Solder' | 'Excess Solder' | 'Flux Residue' | 'Component Shift';
  severity: 'CRITICAL' | 'WARNING' | 'MINOR';
  ipcStandard: string;
  description: string;
  location: { x: number; y: number; width: number; height: number };
  reworkRecommendation: string;
  confidence: number;
}

export interface InspectionResult {
  id: string;
  timestamp: string;
  boardIdentifier: string;
  status: 'FAIL' | 'PASS' | 'WARNING';
  defects: DefectItem[];
  jointCount: number;
  qualityScore: number;
  operatorId: string;
  imageUrl?: string;
  notes: string;
}

export interface SampleBoard {
  id: string;
  title: string;
  description: string;
  type: string;
  imageUrl: string;
  defectCount: number;
  knownDefects: DefectItem[];
}
