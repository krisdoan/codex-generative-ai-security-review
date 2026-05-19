import React, { ChangeEvent, useEffect, useMemo, useState } from 'react';

type AssetSlot = {
  id: string;
  name: string;
  label: string;
  ratio: string;
  role: string;
  section: 'hero' | 'imagery' | 'applications';
};

type AssetConfig = {
  url: string;
  fileName: string;
  focalX: number;
  focalY: number;
  zoom: number;
  alt: string;
  caption: string;
  enabled: boolean;
};

type SiteContent = {
  eyebrow: string;
  headline: string;
  subheadline: string;
  tagline: string;
  primaryCta: string;
  secondaryCta: string;
  contactEmail: string;
  expeditionNote: string;
};

type AdminTab = 'content' | 'assets' | 'palette';

const STORAGE_KEY = 'wildluxe_site_config_v1';

const assetSlots: AssetSlot[] = [
  {
    id: 'hero_mountain_valley',
    name: 'hero_mountain_valley.jpg',
    label: 'Hero Mountain Valley',
    ratio: '16:10',
    role: 'Immersive first-view mountain expedition image',
    section: 'hero',
  },
  {
    id: 'brand_imagery_alpine_ridge',
    name: 'brand_imagery_alpine_ridge.jpg',
    label: 'Alpine Ridge',
    ratio: '4:3',
    role: 'Brand imagery tile for dramatic peaks',
    section: 'imagery',
  },
  {
    id: 'brand_imagery_glacier_boat',
    name: 'brand_imagery_glacier_boat.jpg',
    label: 'Glacier Boat',
    ratio: '4:3',
    role: 'Private access adventure tile',
    section: 'imagery',
  },
  {
    id: 'brand_imagery_summit_guide',
    name: 'brand_imagery_summit_guide.jpg',
    label: 'Summit Guide',
    ratio: '4:3',
    role: 'Intentional experience tile',
    section: 'imagery',
  },
  {
    id: 'brand_imagery_helicopter_basecamp',
    name: 'brand_imagery_helicopter_basecamp.jpg',
    label: 'Helicopter Basecamp',
    ratio: '4:3',
    role: 'Extraordinary places tile',
    section: 'imagery',
  },
  {
    id: 'brand_imagery_alpine_camp',
    name: 'brand_imagery_alpine_camp.jpg',
    label: 'Alpine Camp',
    ratio: '4:3',
    role: 'Lasting memories tile',
    section: 'imagery',
  },
  {
    id: 'brand_application_embossed_stationery',
    name: 'brand_application_embossed_stationery.jpg',
    label: 'Embossed Stationery',
    ratio: '3:2',
    role: 'Premium collateral application',
    section: 'applications',
  },
  {
    id: 'brand_application_luggage_tag',
    name: 'brand_application_luggage_tag.jpg',
    label: 'Luggage Tag',
    ratio: '3:2',
    role: 'Travel object application',
    section: 'applications',
  },
  {
    id: 'brand_application_ceramic_mug',
    name: 'brand_application_ceramic_mug.jpg',
    label: 'Ceramic Mug',
    ratio: '3:2',
    role: 'Hospitality object application',
    section: 'applications',
  },
  {
    id: 'brand_application_black_business_cards',
    name: 'brand_application_black_business_cards.jpg',
    label: 'Black Business Cards',
    ratio: '3:2',
    role: 'Invitation and membership card application',
    section: 'applications',
  },
];

const defaultContent: SiteContent = {
  eyebrow: 'Private Expeditions',
  headline: 'Private access to extraordinary places.',
  subheadline:
    'WILDLUXE designs discreet, deeply intentional mountain journeys for travelers who want solitude, craft, and wild beauty without compromise.',
  tagline: 'Private access. Extraordinary places. Lasting memories.',
  primaryCta: 'Plan An Expedition',
  secondaryCta: 'Explore The Standard',
  contactEmail: 'concierge@wildluxe.example',
  expeditionNote:
    'Each route is shaped by local guides, weather windows, conservation limits, and the rhythm of the landscape.',
};

const palette = [
  ['Obsidian', '#080B0B'],
  ['Lichen', '#6E705C'],
  ['Stone', '#A8A39B'],
  ['Parchment', '#D6CFC4'],
  ['Ivory', '#F5F3EF'],
  ['Alpine Gold', '#C9A15A'],
];

const values = [
  ['Private Access', 'Hidden valleys, quiet lodges, and protected routes.'],
  ['Intentional Experiences', 'Every transfer, meal, and vista has a reason.'],
  ['Extraordinary Places', 'Remote alpine terrain selected for rare atmosphere.'],
  ['Lasting Memories', 'Field notes, keepsakes, and stories worth returning to.'],
];

const createDefaultAssets = (): Record<string, AssetConfig> =>
  Object.fromEntries(
    assetSlots.map((slot) => [
      slot.id,
      {
        url: '',
        fileName: slot.name,
        focalX: 50,
        focalY: 50,
        zoom: 100,
        alt: slot.label,
        caption: slot.role,
        enabled: true,
      },
    ]),
  );

const readConfig = (): { content: SiteContent; assets: Record<string, AssetConfig> } => {
  if (typeof window === 'undefined') {
    return { content: defaultContent, assets: createDefaultAssets() };
  }

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return { content: defaultContent, assets: createDefaultAssets() };
    const parsed = JSON.parse(raw);
    return {
      content: { ...defaultContent, ...(parsed.content ?? {}) },
      assets: { ...createDefaultAssets(), ...(parsed.assets ?? {}) },
    };
  } catch {
    return { content: defaultContent, assets: createDefaultAssets() };
  }
};

const getRoute = () => (window.location.pathname === '/admin' ? 'admin' : 'landing');

const routeTo = (path: '/' | '/admin') => {
  window.history.pushState({}, '', path);
  window.dispatchEvent(new PopStateEvent('popstate'));
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const parseRatio = (ratio: string) => ratio.replace(':', ' / ');

function MountainMark({ compact = false }: { compact?: boolean }) {
  return (
    <div className={compact ? 'brand-mark brand-mark--compact' : 'brand-mark'} aria-hidden="true">
      <svg viewBox="0 0 160 84" role="img">
        <path className="mark-sun" d="M35 44a45 45 0 0 1 90 0" />
        <path className="mark-mountains" d="M18 60l29-24 22 17 25-25 48 32" />
        <path className="mark-ridge" d="M55 58l19-15 16 12" />
      </svg>
    </div>
  );
}

function Wordmark({ small = false }: { small?: boolean }) {
  return (
    <div className={small ? 'wordmark wordmark--small' : 'wordmark'}>
      <MountainMark compact={small} />
      <span>WILDLUXE</span>
      <em>Private Expeditions</em>
    </div>
  );
}

function ImageSlot({ slot, asset, className = '' }: { slot: AssetSlot; asset: AssetConfig; className?: string }) {
  const position = `${asset.focalX}% ${asset.focalY}%`;
  const transform = `scale(${Math.max(asset.zoom, 100) / 100})`;

  return (
    <figure
      className={`image-slot ${asset.url ? 'image-slot--filled' : 'image-slot--empty'} ${className}`}
      style={{ aspectRatio: parseRatio(slot.ratio) }}
    >
      {asset.url ? (
        <img src={asset.url} alt={asset.alt} style={{ objectPosition: position, transform }} />
      ) : (
        <div className="placeholder-card">
          <span>{asset.fileName || slot.name}</span>
          <small>{slot.role}</small>
        </div>
      )}
      <figcaption>{asset.caption || slot.label}</figcaption>
    </figure>
  );
}

function LandingPage({
  content,
  assets,
}: {
  content: SiteContent;
  assets: Record<string, AssetConfig>;
}) {
  const imagerySlots = assetSlots.filter((slot) => slot.section === 'imagery' && assets[slot.id]?.enabled);
  const applicationSlots = assetSlots.filter((slot) => slot.section === 'applications' && assets[slot.id]?.enabled);
  const heroSlot = assetSlots[0];

  return (
    <main className="site-shell">
      <header className="topbar">
        <button className="topbar__brand" onClick={() => routeTo('/')} aria-label="Go to landing page">
          <Wordmark small />
        </button>
        <nav>
          <a href="#expeditions">Expeditions</a>
          <a href="#standard">The Standard</a>
          <a href="#contact">Contact</a>
          <button onClick={() => routeTo('/admin')}>Admin</button>
        </nav>
      </header>

      <section className="hero">
        <div className="hero__copy">
          <p className="eyebrow">{content.eyebrow}</p>
          <h1>{content.headline}</h1>
          <p className="hero__lead">{content.subheadline}</p>
          <div className="hero__actions">
            <a href={`mailto:${content.contactEmail}`} className="button button--gold">
              {content.primaryCta}
            </a>
            <a href="#standard" className="button button--ghost">
              {content.secondaryCta}
            </a>
          </div>
        </div>
        <div className="hero__visual">
          <ImageSlot slot={heroSlot} asset={assets[heroSlot.id]} />
          <div className="hero__seal">
            <MountainMark compact />
            <span>W / L</span>
          </div>
        </div>
      </section>

      <section className="brand-board" aria-label="Brand system overview">
        <div className="section-label">
          <span />
          <p>Logo System</p>
          <span />
        </div>
        <div className="logo-grid">
          <div className="logo-panel logo-panel--large">
            <p>Primary Logo</p>
            <Wordmark />
          </div>
          <div className="logo-panel">
            <p>Monogram</p>
            <div className="monogram">W<span />L</div>
          </div>
          <div className="logo-panel logo-panel--light">
            <p>Light Variation</p>
            <Wordmark small />
          </div>
          <div className="logo-panel">
            <p>Icon Only</p>
            <MountainMark />
          </div>
        </div>
      </section>

      <section className="system-grid" id="standard">
        <div className="palette-card">
          <div className="section-label section-label--left">
            <span />
            <p>Color Palette</p>
          </div>
          <div className="swatches">
            {palette.map(([label, color]) => (
              <div key={color} className="swatch">
                <span style={{ backgroundColor: color }} />
                <small>{color}</small>
                <em>{label}</em>
              </div>
            ))}
          </div>
        </div>
        <div className="type-card">
          <div className="section-label section-label--left">
            <span />
            <p>Typography</p>
          </div>
          <h2>Heading</h2>
          <p className="subhead">Subheading</p>
          <p>Body copy is clean, readable, and timeless, balanced by a ceremonial display face.</p>
        </div>
      </section>

      <section className="image-section" id="expeditions">
        <div className="section-label">
          <span />
          <p>Brand Imagery</p>
          <span />
        </div>
        <div className="imagery-grid">
          {imagerySlots.map((slot) => (
            <ImageSlot key={slot.id} slot={slot} asset={assets[slot.id]} />
          ))}
        </div>
      </section>

      <section className="image-section">
        <div className="section-label">
          <span />
          <p>Brand Applications</p>
          <span />
        </div>
        <div className="applications-grid">
          {applicationSlots.map((slot) => (
            <ImageSlot key={slot.id} slot={slot} asset={assets[slot.id]} />
          ))}
        </div>
      </section>

      <section className="values-section">
        <div className="brand-mark-panel">
          <p>Brand Mark</p>
          <MountainMark />
          <strong>Private. Intentional. Unforgettable.</strong>
        </div>
        <div className="values-panel">
          <p className="panel-kicker">Brand Values</p>
          <div className="values-grid">
            {values.map(([title, copy]) => (
              <article key={title}>
                <span className="value-icon" />
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </div>
        <div className="tagline-panel" id="contact">
          <p>Brand Tagline</p>
          <h2>{content.tagline}</h2>
          <span>{content.expeditionNote}</span>
          <a href={`mailto:${content.contactEmail}`}>{content.contactEmail}</a>
        </div>
      </section>
    </main>
  );
}

function AdminPage({
  content,
  assets,
  setContent,
  setAssets,
  resetAll,
}: {
  content: SiteContent;
  assets: Record<string, AssetConfig>;
  setContent: React.Dispatch<React.SetStateAction<SiteContent>>;
  setAssets: React.Dispatch<React.SetStateAction<Record<string, AssetConfig>>>;
  resetAll: () => void;
}) {
  const [tab, setTab] = useState<AdminTab>('assets');
  const [selectedSlotId, setSelectedSlotId] = useState(assetSlots[0].id);
  const selectedSlot = assetSlots.find((slot) => slot.id === selectedSlotId) ?? assetSlots[0];
  const selectedAsset = assets[selectedSlot.id];

  const completion = useMemo(() => {
    const filled = assetSlots.filter((slot) => assets[slot.id]?.url).length;
    return Math.round((filled / assetSlots.length) * 100);
  }, [assets]);

  const updateAsset = (slotId: string, patch: Partial<AssetConfig>) => {
    setAssets((current) => ({
      ...current,
      [slotId]: { ...current[slotId], ...patch },
    }));
  };

  const handleFile = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      updateAsset(selectedSlot.id, {
        url: String(reader.result),
        fileName: file.name,
        alt: selectedAsset.alt || selectedSlot.label,
        caption: selectedAsset.caption || selectedSlot.role,
        enabled: true,
      });
    };
    reader.readAsDataURL(file);
  };

  const updateContent = (field: keyof SiteContent, value: string) => {
    setContent((current) => ({ ...current, [field]: value }));
  };

  return (
    <main className="admin-shell">
      <aside className="admin-sidebar">
        <button className="admin-logo" onClick={() => routeTo('/')}>
          <Wordmark small />
        </button>
        <p>Control room for copy, asset uploads, crop framing, and launch readiness.</p>
        <div className="deploy-meter">
          <span style={{ width: `${completion}%` }} />
        </div>
        <small>{completion}% of asset slots uploaded</small>
        <nav>
          {(['assets', 'content', 'palette'] as AdminTab[]).map((item) => (
            <button key={item} className={tab === item ? 'is-active' : ''} onClick={() => setTab(item)}>
              {item}
            </button>
          ))}
        </nav>
        <button className="button button--gold" onClick={() => routeTo('/')}>
          Preview Landing
        </button>
        <button className="text-button" onClick={resetAll}>
          Reset Local Draft
        </button>
      </aside>

      <section className="admin-main">
        <div className="admin-header">
          <p className="eyebrow">Admin Page</p>
          <h1>Upload, crop, and tune the Wildluxe landing page.</h1>
        </div>

        {tab === 'assets' && (
          <div className="admin-layout">
            <div className="slot-list">
              {assetSlots.map((slot) => (
                <button
                  key={slot.id}
                  className={selectedSlot.id === slot.id ? 'slot-row is-active' : 'slot-row'}
                  onClick={() => setSelectedSlotId(slot.id)}
                >
                  <span>{slot.label}</span>
                  <small>{assets[slot.id]?.url ? assets[slot.id].fileName : slot.name}</small>
                </button>
              ))}
            </div>
            <div className="editor-card">
              <div className="editor-card__top">
                <div>
                  <p className="eyebrow">Asset Slot</p>
                  <h2>{selectedSlot.label}</h2>
                  <span>{selectedSlot.name}</span>
                </div>
                <label className="upload-button">
                  Upload Image
                  <input type="file" accept="image/*" onChange={handleFile} />
                </label>
              </div>

              <ImageSlot slot={selectedSlot} asset={selectedAsset} className="admin-preview" />

              <div className="control-grid">
                <label>
                  Focal X
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={selectedAsset.focalX}
                    onChange={(event) => updateAsset(selectedSlot.id, { focalX: Number(event.target.value) })}
                  />
                </label>
                <label>
                  Focal Y
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={selectedAsset.focalY}
                    onChange={(event) => updateAsset(selectedSlot.id, { focalY: Number(event.target.value) })}
                  />
                </label>
                <label>
                  Zoom
                  <input
                    type="range"
                    min="100"
                    max="180"
                    value={selectedAsset.zoom}
                    onChange={(event) => updateAsset(selectedSlot.id, { zoom: Number(event.target.value) })}
                  />
                </label>
                <label className="toggle-row">
                  Visible
                  <input
                    type="checkbox"
                    checked={selectedAsset.enabled}
                    onChange={(event) => updateAsset(selectedSlot.id, { enabled: event.target.checked })}
                  />
                </label>
              </div>

              <div className="form-grid">
                <label>
                  Alt Text
                  <input
                    value={selectedAsset.alt}
                    onChange={(event) => updateAsset(selectedSlot.id, { alt: event.target.value })}
                  />
                </label>
                <label>
                  Display Caption
                  <input
                    value={selectedAsset.caption}
                    onChange={(event) => updateAsset(selectedSlot.id, { caption: event.target.value })}
                  />
                </label>
                <label>
                  Final Asset Name
                  <input
                    value={selectedAsset.fileName}
                    onChange={(event) => updateAsset(selectedSlot.id, { fileName: event.target.value })}
                  />
                </label>
                <label>
                  Recommended Ratio
                  <input value={selectedSlot.ratio} readOnly />
                </label>
              </div>
            </div>
          </div>
        )}

        {tab === 'content' && (
          <div className="editor-card">
            <div className="form-grid form-grid--single">
              {Object.entries(content).map(([key, value]) => (
                <label key={key}>
                  {key.replace(/([A-Z])/g, ' $1')}
                  {value.length > 90 ? (
                    <textarea
                      value={value}
                      rows={4}
                      onChange={(event) => updateContent(key as keyof SiteContent, event.target.value)}
                    />
                  ) : (
                    <input value={value} onChange={(event) => updateContent(key as keyof SiteContent, event.target.value)} />
                  )}
                </label>
              ))}
            </div>
          </div>
        )}

        {tab === 'palette' && (
          <div className="editor-card">
            <p className="eyebrow">Readiness Notes</p>
            <h2>Asset naming and deployment checklist</h2>
            <div className="checklist">
              {assetSlots.map((slot) => (
                <article key={slot.id}>
                  <strong>{slot.name}</strong>
                  <span>{slot.role}</span>
                  <em>{slot.ratio}</em>
                </article>
              ))}
            </div>
          </div>
        )}
      </section>
    </main>
  );
}

export default function App() {
  const [route, setRoute] = useState<'landing' | 'admin'>(() => getRoute());
  const initialConfig = useMemo(() => readConfig(), []);
  const [content, setContent] = useState<SiteContent>(initialConfig.content);
  const [assets, setAssets] = useState<Record<string, AssetConfig>>(initialConfig.assets);

  useEffect(() => {
    const handleRoute = () => setRoute(getRoute());
    window.addEventListener('popstate', handleRoute);
    return () => window.removeEventListener('popstate', handleRoute);
  }, []);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify({ content, assets }));
  }, [content, assets]);

  const resetAll = () => {
    setContent(defaultContent);
    setAssets(createDefaultAssets());
  };

  return route === 'admin' ? (
    <AdminPage content={content} assets={assets} setContent={setContent} setAssets={setAssets} resetAll={resetAll} />
  ) : (
    <LandingPage content={content} assets={assets} />
  );
}
