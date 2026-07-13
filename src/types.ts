export interface BgModule {
  id: string;
  label: string;
  kenmerken: Record<string, unknown>;
  uitbouwBijKop?: {
    aanwezig: boolean;
    omschrijving: string;
  };
}

export interface VerdiepingModule {
  id: string;
  label: string;
  kenmerken: Record<string, unknown>;
  compatibleWith?: string[];
}

export interface PositieModule {
  id: string;
  label: string;
  kenmerken: Record<string, unknown>;
  compatibleWith?: string[];
}

export interface RendersConfig {
  pathTemplate: string;
  placeholder: string;
  notitie: string;
}

export interface WoningConfig {
  modules: {
    bg: BgModule[];
    verdieping: VerdiepingModule[];
    positie: PositieModule[];
  };
  renders: RendersConfig;
}

export interface Selection {
  bg?: string;
  verdieping?: string;
  positie?: string;
}
