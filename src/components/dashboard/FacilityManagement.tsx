import { useState, useEffect } from 'react';
import { Package, Wrench } from 'lucide-react';
import { Button } from '../Button';
import { getEquipment, getProducts } from '../../lib/api';
import type { Equipment, Product } from '../../types';

export function FacilityManagement() {
  const [activeSection, setActiveSection] = useState<'equipment' | 'products'>('equipment');
  const [equipment, setEquipment] = useState<Equipment[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadData() {
      setLoading(true);
      setError(null);
      try {
        if (activeSection === 'equipment') {
          const equipmentData = await getEquipment();
          setEquipment(equipmentData);
        } else if (activeSection === 'products') {
          const productsData = await getProducts();
          setProducts(productsData);
        }
      } catch (err) {
        console.error('Error loading data:', err);
        setError('Failed to load data. Please try again later.');
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, [activeSection]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-primary mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center">
          <p className="text-red-600 mb-4">{error}</p>
          <Button onClick={() => window.location.reload()}>Try Again</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Navigation Tabs */}
      <div className="bg-white rounded-lg shadow-md p-4">
        <div className="flex space-x-4">
          <button
            onClick={() => setActiveSection('equipment')}
            className={`flex items-center px-4 py-2 rounded-lg transition-colors ${
              activeSection === 'equipment' ? 'bg-brand-primary/10 text-brand-primary' : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            <Wrench size={20} className="mr-2" />
            Equipment
          </button>
          <button
            onClick={() => setActiveSection('products')}
            className={`flex items-center px-4 py-2 rounded-lg transition-colors ${
              activeSection === 'products' ? 'bg-brand-primary/10 text-brand-primary' : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            <Package size={20} className="mr-2" />
            Product Orders
          </button>
        </div>
      </div>

      {/* Equipment Section */}
      {activeSection === 'equipment' && (
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold mb-6 text-brand-dark">Equipment Leasing</h2>
          
          {equipment.length === 0 ? (
            <div className="text-center py-8 text-gray-500">
              No equipment available at the moment
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mb-8">
              {equipment.map((item) => (
                <div key={item.id} className="border rounded-lg p-6 hover:border-brand-primary/50 transition-colors">
                  <h3 className="text-xl font-semibold mb-4 text-brand-dark">{item.name}</h3>
                  {item.imageUrl && (
                    <img 
                      src={item.imageUrl} 
                      alt={item.name} 
                      className="w-full h-48 object-cover rounded-lg mb-4"
                    />
                  )}
                  <div className="space-y-4">
                    <p className="text-gray-600">{item.description}</p>
                    <div>
                      <p className="font-medium text-brand-dark">Lease Options:</p>
                      <ul className="list-disc list-inside text-gray-600 ml-4">
                        <li>Daily Rate: ${item.dailyRate}</li>
                        <li>Monthly Rate: ${item.monthlyRate}</li>
                        <li>Training included</li>
                        <li>{item.available ? 'Ready for immediate use' : 'Currently unavailable'}</li>
                      </ul>
                    </div>
                    <Button 
                      className="w-full" 
                      disabled={!item.available}
                    >
                      {item.available ? 'Lease Equipment' : 'Not Available'}
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="bg-brand-light rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4 text-brand-dark">Leasing Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium mb-2 text-brand-dark">Requirements</h4>
                <ul className="list-disc list-inside text-gray-600 ml-4">
                  <li>Valid medical license</li>
                  <li>Practice liability insurance</li>
                  <li>Signed lease agreement</li>
                  <li>Security deposit</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-2 text-brand-dark">What's Included</h4>
                <ul className="list-disc list-inside text-gray-600 ml-4">
                  <li>Equipment delivery & setup</li>
                  <li>Comprehensive training</li>
                  <li>Technical support</li>
                  <li>Maintenance & repairs</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Product Orders Section */}
      {activeSection === 'products' && (
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold mb-6 text-brand-dark">Product Ordering</h2>
          
          {products.length === 0 ? (
            <div className="text-center py-8 text-gray-500">
              No products available at the moment
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {products.map((product) => (
                <div key={product.id} className="border rounded-lg p-6 hover:border-brand-primary/50 transition-colors">
                  <h3 className="text-xl font-semibold mb-4 text-brand-dark">{product.name}</h3>
                  <div className="space-y-4">
                    <p className="text-gray-600">{product.description}</p>
                    <div>
                      <p className="font-medium text-brand-dark">Ordering Requirements:</p>
                      <ul className="list-disc list-inside text-gray-600 ml-4">
                        <li>Minimum order: {product.minOrder} {product.unit}</li>
                        <li>Must provide valid medical license</li>
                        <li>Orders processed within 48 hours</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-medium text-brand-dark">Pricing:</p>
                      <ul className="list-disc list-inside text-gray-600 ml-4">
                        <li>Base price: ${product.price} per {product.unit}</li>
                        <li>Volume discounts available</li>
                      </ul>
                    </div>
                    <Button className="w-full">Place Order</Button>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="bg-brand-light rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4 text-brand-dark">Ordering Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium mb-2 text-brand-dark">Required Documentation</h4>
                <ul className="list-disc list-inside text-gray-600 ml-4">
                  <li>Valid medical license</li>
                  <li>DEA registration (if applicable)</li>
                  <li>Practice liability insurance</li>
                  <li>Signed purchase agreement</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-2 text-brand-dark">Shipping & Handling</h4>
                <ul className="list-disc list-inside text-gray-600 ml-4">
                  <li>Free shipping on orders over $5,000</li>
                  <li>Temperature-controlled shipping</li>
                  <li>Tracking provided</li>
                  <li>Insurance included</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}