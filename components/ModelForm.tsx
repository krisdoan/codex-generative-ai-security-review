import React from 'react';
import { ModelAttributes } from '../types';
import { BUILTIN_SPEC_CHOICES } from '../specChoices';

interface ModelFormProps {
  attributes: ModelAttributes;
  onChange: (key: keyof ModelAttributes, value: string | number) => void;
  onSubmit: () => void;
  isSubmitting: boolean;
  glassesCount: number;
  choices?: Partial<Record<keyof ModelAttributes, string[]>>;
  customFields?: Array<{ key: string; label: string; options: string[] }>;
  customValues?: Record<string, string>;
  onCustomChange?: (key: string, value: string) => void;
}

const InputGroup: React.FC<{ label: string; children: React.ReactNode }> = ({ label, children }) => (
  <div className="flex flex-col space-y-1">
    <label className="text-[10px] font-bold text-black uppercase tracking-tighter">{label}</label>
    {children}
  </div>
);

const Select: React.FC<{
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: string[];
}> = ({ value, onChange, options }) => (
  <select
    value={value}
    onChange={onChange}
    className="bg-white border border-black text-black text-sm rounded-none focus:ring-0 focus:border-black block w-full p-2 transition-colors font-medium"
  >
    {options.map((opt) => (
      <option key={opt} value={opt}>{opt}</option>
    ))}
  </select>
);

export const ModelForm: React.FC<ModelFormProps> = ({
  attributes,
  onChange,
  onSubmit,
  isSubmitting,
  glassesCount,
  choices,
  customFields,
  customValues,
  onCustomChange,
}) => {
  // (Choices are provided by App; fall back to built-in lists.)
  // Keep as a plain helper so each <Select> stays readable.
  const opt = (key: keyof ModelAttributes) =>
    (choices?.[key] && Array.isArray(choices[key]) && (choices[key] as string[]).length > 0
      ? (choices[key] as string[])
      : (BUILTIN_SPEC_CHOICES[key] as string[]) || []);

  return (
    <div className="space-y-4 bg-white p-4 border border-black">
      <h3 className="text-sm font-black text-black uppercase tracking-widest border-b border-black pb-2 mb-4">
        Technical Specs
      </h3>
      
      <div className="grid grid-cols-2 gap-3">
        <InputGroup label="Identity">
          <Select 
            value={attributes.ethnicity} 
            onChange={(e) => onChange('ethnicity', e.target.value)} 
            options={opt('ethnicity')} 
          />
        </InputGroup>

        <InputGroup label="Gender">
          <Select 
            value={attributes.gender} 
            onChange={(e) => onChange('gender', e.target.value)} 
            options={opt('gender')} 
          />
        </InputGroup>
        
        <InputGroup label="Age">
          <Select 
            value={attributes.age} 
            onChange={(e) => onChange('age', e.target.value)} 
            options={opt('age')} 
          />
        </InputGroup>

        <InputGroup label="Hair Style">
          <Select 
            value={attributes.hairStyle} 
            onChange={(e) => onChange('hairStyle', e.target.value)} 
            options={opt('hairStyle')} 
          />
        </InputGroup>

        <InputGroup label="Skin Texture">
          <Select 
            value={attributes.skinTexture} 
            onChange={(e) => onChange('skinTexture', e.target.value)} 
            options={opt('skinTexture')} 
          />
        </InputGroup>

        <InputGroup label="Color Grading">
          <Select 
            value={attributes.colorGrading} 
            onChange={(e) => onChange('colorGrading', e.target.value)} 
            options={opt('colorGrading')} 
          />
        </InputGroup>

        <InputGroup label="Clothing Style">
          <Select 
            value={attributes.clothing} 
            onChange={(e) => onChange('clothing', e.target.value)} 
            options={opt('clothing')} 
          />
        </InputGroup>

        <InputGroup label="Environment">
          <Select 
            value={attributes.environment} 
            onChange={(e) => onChange('environment', e.target.value)} 
            options={opt('environment')} 
          />
        </InputGroup>

        <InputGroup label="Hand Props / Hand Posture">
          <Select 
            value={attributes.handProps} 
            onChange={(e) => onChange('handProps', e.target.value)} 
            options={opt('handProps')} 
          />
        </InputGroup>

        <InputGroup label="Aspect Ratio">
          <Select 
            value={attributes.aspectRatio} 
            onChange={(e) => onChange('aspectRatio', e.target.value)} 
            options={opt('aspectRatio')} 
          />
        </InputGroup>

        <InputGroup label="Image Size">
          <Select 
            value={attributes.imageSize} 
            onChange={(e) => onChange('imageSize', e.target.value)} 
            options={opt('imageSize')} 
          />
        </InputGroup>

        <InputGroup label="Pose">
          <Select 
            value={attributes.pose} 
            onChange={(e) => onChange('pose', e.target.value)} 
            options={opt('pose')} 
          />
        </InputGroup>

        <InputGroup label="Shot Type">
          <Select 
            value={attributes.shotType} 
            onChange={(e) => onChange('shotType', e.target.value)} 
            options={opt('shotType')} 
          />
        </InputGroup>

        <InputGroup label="Expression">
          <Select 
            value={attributes.facialExpression} 
            onChange={(e) => onChange('facialExpression', e.target.value)} 
            options={opt('facialExpression')} 
          />
        </InputGroup>

        {(customFields || []).map((f) => {
          const key = String(f.key || '').trim();
          if (!key) return null;
          const label = String(f.label || key);
          const baseOptions = Array.isArray(f.options) ? f.options : [];
          const options = baseOptions.includes('Randomize') ? baseOptions : ['Randomize', ...baseOptions];
          const value = (customValues && typeof customValues[key] === 'string') ? customValues[key] : (options[0] || '');
          return (
            <InputGroup key={key} label={label}>
              <Select
                value={value}
                onChange={(e) => onCustomChange?.(key, e.target.value)}
                options={options}
              />
            </InputGroup>
          );
        })}
      </div>

      <button
        onClick={onSubmit}
        disabled={isSubmitting}
        className={`w-full py-3 px-5 rounded-none text-white font-black text-sm uppercase tracking-widest transition-all ${
          isSubmitting 
            ? 'bg-gray-400 cursor-not-allowed' 
            : 'bg-black hover:bg-gray-800'
        }`}
      >
        {isSubmitting ? 'Processing...' : glassesCount > 0 ? `Generate ${glassesCount} Variation${glassesCount !== 1 ? 's' : ''}` : 'Upload Glasses to Start'}
      </button>
    </div>
  );
};
