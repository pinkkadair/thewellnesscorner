import { useState } from 'react';
import { Upload, Palette, Save } from 'lucide-react';
import { Button } from '../Button';
import type { ProviderWebsite } from '../../types';

export function WebsiteEditor() {
  const [website, setWebsite] = useState<ProviderWebsite['customizations']>({
    primaryColor: '#3a7d7c',
    bio: 'Experienced holistic medicine practitioner...',
    services: [
      {
        name: 'Initial Consultation',
        description: 'Comprehensive health assessment',
        duration: 60,
        price: 150
      }
    ],
    socialLinks: {},
    brandingColors: {
      primary: '#3a7d7c',
      secondary: '#6a9a9a',
      accent: '#e8c48a'
    }
  });

  const [, setLogoFile] = useState<File | null>(null);
  const [logoPreview, setLogoPreview] = useState<string>('');

  const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setLogoFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setLogoPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-6 text-brand-dark">My Website</h2>
        
        <div className="space-y-8">
          {/* Branding Section */}
          <div className="border-b pb-6">
            <h3 className="text-lg font-semibold mb-4 text-brand-dark">Branding</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Logo Upload */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Logo
                </label>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    {logoPreview ? (
                      <img 
                        src={logoPreview} 
                        alt="Logo preview" 
                        className="w-32 h-32 object-contain border rounded-lg"
                      />
                    ) : (
                      <div className="w-32 h-32 border-2 border-dashed rounded-lg flex items-center justify-center bg-gray-50">
                        <Upload className="text-gray-400" size={24} />
                      </div>
                    )}
                  </div>
                  <div className="flex-grow">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleLogoChange}
                      className="hidden"
                      id="logo-upload"
                    />
                    <label
                      htmlFor="logo-upload"
                      className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 cursor-pointer"
                    >
                      Choose File
                    </label>
                    <p className="mt-2 text-sm text-gray-500">
                      Recommended size: 400x400px. Max file size: 2MB
                    </p>
                  </div>
                </div>
              </div>

              {/* Color Scheme */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Brand Colors
                </label>
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs text-gray-500 mb-1">Primary Color</label>
                    <div className="flex items-center space-x-2">
                      <Palette size={20} className="text-gray-400" />
                      <input
                        type="color"
                        value={website.brandingColors?.primary}
                        onChange={(e) => setWebsite({
                          ...website,
                          brandingColors: {
                            ...website.brandingColors!,
                            primary: e.target.value
                          }
                        })}
                        className="h-8 w-16"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs text-gray-500 mb-1">Secondary Color</label>
                    <div className="flex items-center space-x-2">
                      <Palette size={20} className="text-gray-400" />
                      <input
                        type="color"
                        value={website.brandingColors?.secondary}
                        onChange={(e) => setWebsite({
                          ...website,
                          brandingColors: {
                            ...website.brandingColors!,
                            secondary: e.target.value
                          }
                        })}
                        className="h-8 w-16"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs text-gray-500 mb-1">Accent Color</label>
                    <div className="flex items-center space-x-2">
                      <Palette size={20} className="text-gray-400" />
                      <input
                        type="color"
                        value={website.brandingColors?.accent}
                        onChange={(e) => setWebsite({
                          ...website,
                          brandingColors: {
                            ...website.brandingColors!,
                            accent: e.target.value
                          }
                        })}
                        className="h-8 w-16"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Theme Selection */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Theme
            </label>
            <select 
              className="w-full p-2 border rounded-lg focus:ring-brand-primary focus:border-brand-primary"
              value={website.theme}
              onChange={(e) => setWebsite({ 
                ...website, 
                theme: e.target.value as ProviderWebsite['customizations']['theme']
              })}
            >
              <option value="minimal">Minimal</option>
              <option value="professional">Professional</option>
              <option value="wellness">Wellness</option>
            </select>
          </div>

          {/* Bio */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Bio
            </label>
            <textarea
              value={website.bio}
              onChange={(e) => setWebsite({ ...website, bio: e.target.value })}
              className="w-full p-2 border rounded-lg focus:ring-brand-primary focus:border-brand-primary"
              rows={4}
            />
          </div>

          {/* Services */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Services
            </label>
            {website.services.map((service, index) => (
              <div key={index} className="p-4 border rounded-lg mb-4 hover:border-brand-primary/50 transition-colors">
                <input
                  type="text"
                  value={service.name}
                  onChange={(e) => {
                    const newServices = [...website.services];
                    newServices[index] = { ...service, name: e.target.value };
                    setWebsite({ ...website, services: newServices });
                  }}
                  className="w-full p-2 border rounded-lg mb-2 focus:ring-brand-primary focus:border-brand-primary"
                  placeholder="Service name"
                />
                <textarea
                  value={service.description}
                  onChange={(e) => {
                    const newServices = [...website.services];
                    newServices[index] = { ...service, description: e.target.value };
                    setWebsite({ ...website, services: newServices });
                  }}
                  className="w-full p-2 border rounded-lg mb-2 focus:ring-brand-primary focus:border-brand-primary"
                  placeholder="Description"
                />
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="number"
                    value={service.duration}
                    onChange={(e) => {
                      const newServices = [...website.services];
                      newServices[index] = { ...service, duration: parseInt(e.target.value) };
                      setWebsite({ ...website, services: newServices });
                    }}
                    className="p-2 border rounded-lg focus:ring-brand-primary focus:border-brand-primary"
                    placeholder="Duration (minutes)"
                  />
                  <input
                    type="number"
                    value={service.price}
                    onChange={(e) => {
                      const newServices = [...website.services];
                      newServices[index] = { ...service, price: parseInt(e.target.value) };
                      setWebsite({ ...website, services: newServices });
                    }}
                    className="p-2 border rounded-lg focus:ring-brand-primary focus:border-brand-primary"
                    placeholder="Price"
                  />
                </div>
              </div>
            ))}
            <Button
              variant="secondary"
              onClick={() => setWebsite({
                ...website,
                services: [...website.services, { name: '', description: '', duration: 30, price: 0 }]
              })}
            >
              Add Service
            </Button>
          </div>

          <div className="flex justify-end space-x-4">
            <Button variant="secondary">Preview</Button>
            <Button>
              <Save size={20} className="mr-2" />
              Save Changes
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}