import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { 
  Heart, Search, Filter, MapPin, Grid3X3, Map, Star, 
  ChevronLeft, ChevronRight, ArrowRight, Image, Compass, Info
} from 'lucide-react';

export default function PropertySearch() {
  const location = useLocation();
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [favorites, setFavorites] = useState([]);
  const [viewMode, setViewMode] = useState('grid');
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    propertyType: '',
    minPrice: '',
    maxPrice: '',
    bedrooms: '',
    bathrooms: '',
    sort: 'newest'
  });

  const toggleFavorite = (propertyId) => {
    if (favorites.includes(propertyId)) {
      setFavorites(favorites.filter(id => id !== propertyId));
    } else {
      setFavorites([...favorites, propertyId]);
    }
    
    setProperties(prevProperties => 
      prevProperties.map(property => 
        property.id === propertyId 
          ? { ...property, isFavorite: !property.isFavorite } 
          : property
      )
    );
  };

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    searchParams.get('q');
    
    setLoading(true);
    
    setTimeout(() => {
      const mockProperties = [
        {
          id: 1,
          title: "Modern Apartment with Amazing View",
          location: "Downtown, New York",
          address: "123 Park Avenue",
          price: 450000,
          bedrooms: 2,
          bathrooms: 2,
          area: 1200,
          lotSize: "4,500 ft²",
          type: "Apartment",
          status: "For Sale",
          isNew: true,
          tag: "VIRTUAL TOUR",
          tagColor: "bg-blue-500",
          virtualTour: true,
          mainImage: '/property.jpg',
          isFavorite: favorites.includes(1),
          description: "Beautiful apartment with amazing view of the city skyline. Perfect location, close to all amenities."
        },
        {
          id: 2,
          title: "Spacious Family Home",
          location: "Suburbs, Chicago",
          address: "456 Oak Street",
          price: 650000,
          bedrooms: 4,
          bathrooms: 3,
          area: 2500,
          lotSize: "7,500 ft²",
          type: "House",
          status: "For Sale",
          isNew: false,
          tag: "WITH APARTMENT",
          tagColor: "bg-green-500",
          mainImage: '/property.jpg',
          isFavorite: favorites.includes(2),
          description: "Spacious family home with 4 bedrooms and a beautiful backyard. Great for growing families."
        },
        {
          id: 3,
          title: "Luxury Penthouse",
          location: "Beverly Hills, Los Angeles",
          address: "789 Sunset Boulevard",
          price: 1200000,
          bedrooms: 3,
          bathrooms: 3.5,
          area: 3200,
          lotSize: "3,800 ft²",
          type: "Penthouse",
          status: "For Sale",
          isNew: true,
          tag: "BEST PRICE",
          tagColor: "bg-yellow-500",
          mainImage: '/property.jpg',
          isFavorite: favorites.includes(3),
          description: "Luxurious penthouse with breathtaking views of the city. High-end finishes throughout."
        },
        {
          id: 4,
          title: "Cozy Studio Apartment",
          location: "Brooklyn, New York",
          address: "101 Bedford Avenue",
          price: 2500,
          bedrooms: 0,
          bathrooms: 1,
          area: 600,
          type: "Studio",
          status: "For Rent",
          isNew: false,
          tag: "QUICK MOVE-IN",
          tagColor: "bg-orange-500",
          virtualTour: true,
          mainImage: '/property.jpg',
          isRental: true,
          isFavorite: favorites.includes(4),
          description: "Cozy studio apartment in a trendy Brooklyn neighborhood. Perfect for young professionals."
        },
        {
          id: 5,
          title: "Waterfront Luxury Villa",
          location: "Miami Beach, Florida",
          address: "555 Ocean Drive",
          price: 3200000,
          bedrooms: 5,
          bathrooms: 6,
          area: 5600,
          lotSize: "12,000 ft²",
          type: "Villa",
          status: "For Sale",
          isNew: true,
          tag: "AVAILABLE NOW",
          tagColor: "bg-green-500",
          mainImage: '/property.jpg',
          isFavorite: favorites.includes(5),
          description: "Stunning waterfront villa with private beach access. Ultimate luxury living."
        },
        {
          id: 6,
          title: "Downtown Loft",
          location: "SoHo, New York",
          address: "222 Broadway",
          price: 875000,
          bedrooms: 1,
          bathrooms: 2,
          area: 1800,
          type: "Loft",
          status: "For Sale",
          isNew: false,
          tag: "TAX REBATES",
          tagColor: "bg-purple-500",
          virtualTour: true,
          mainImage: '/property.jpg',
          isFavorite: favorites.includes(6),
          description: "Chic downtown loft with high ceilings and original exposed brick. Perfect urban living."
        }
      ];
      
      setProperties(mockProperties);
      setLoading(false);
    }, 1000);
  }, [location.search, favorites]);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({
      ...filters,
      [name]: value
    });
  };

  const resetFilters = () => {
    setFilters({
      propertyType: '',
      minPrice: '',
      maxPrice: '',
      bedrooms: '',
      bathrooms: '',
      sort: 'newest'
    });
  };

  const applyFilters = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setShowFilters(false);
    }, 800);
  };

  return (
    <div className="min-h-screen bg-slate-100 font-sans text-gray-800">
      {/* Header with search bar */}
      <header className="bg-white backdrop-blur-md bg-opacity-90 shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex-1 max-w-2xl mx-4">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search for location, property type, or keywords..." 
                className="w-full pl-12 pr-4 py-3 rounded-full border border-slate-200 bg-white focus:bg-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 shadow-sm"
              />
              <Search className="absolute left-4 top-3 text-indigo-500" />
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <button 
              onClick={() => setShowFilters(!showFilters)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${showFilters ? 'bg-indigo-100 text-indigo-700' : 'bg-white border border-slate-200 text-slate-700 hover:border-indigo-300'}`}
            >
              <Filter size={18} />
              <span className="hidden sm:inline font-medium">Filters</span>
              {showFilters && <ChevronRight size={16} className="transform rotate-90" />}
            </button>
          </div>
        </div>
      </header>

      {/* Filters panel (slide down when active) */}
      <div className={`bg-white shadow-sm transition-all duration-500 overflow-hidden ${showFilters ? 'max-h-96 border-b border-slate-200' : 'max-h-0'}`}>
        <div className="max-w-7xl mx-auto p-6">
          <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
            <div>
              <label className="text-sm font-medium text-gray-700 mb-1">Property Type</label>
              <select
                name="propertyType"
                value={filters.propertyType}
                onChange={handleFilterChange}
                className="w-full border border-slate-200 bg-white rounded-lg p-3 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              >
                <option value="">All Types</option>
                <option value="house">House</option>
                <option value="apartment">Apartment</option>
                <option value="condo">Condo</option>
                <option value="villa">Villa</option>
                <option value="land">Land</option>
              </select>
            </div>
            
            <div>
              <label className="text-sm font-medium text-gray-700 mb-1">Min Price</label>
              <input
                type="number"
                name="minPrice"
                value={filters.minPrice}
                onChange={handleFilterChange}
                placeholder="Min Price"
                className="w-full border border-slate-200 bg-white rounded-lg p-3 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
            </div>
            
            <div>
              <label className="text-sm font-medium text-gray-700 mb-1">Max Price</label>
              <input
                type="number"
                name="maxPrice"
                value={filters.maxPrice}
                onChange={handleFilterChange}
                placeholder="Max Price"
                className="w-full border border-slate-200 bg-white rounded-lg p-3 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
            </div>
            
            <div>
              <label className="text-sm font-medium text-gray-700 mb-1">Bedrooms</label>
              <select
                name="bedrooms"
                value={filters.bedrooms}
                onChange={handleFilterChange}
                className="w-full border border-slate-200 bg-white rounded-lg p-3 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              >
                <option value="">Any</option>
                <option value="1">1+</option>
                <option value="2">2+</option>
                <option value="3">3+</option>
                <option value="4">4+</option>
                <option value="5">5+</option>
              </select>
            </div>
            
            <div>
              <label className="text-sm font-medium text-gray-700 mb-1">Bathrooms</label>
              <select
                name="bathrooms"
                value={filters.bathrooms}
                onChange={handleFilterChange}
                className="w-full border border-slate-200 bg-white rounded-lg p-3 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              >
                <option value="">Any</option>
                <option value="1">1+</option>
                <option value="2">2+</option>
                <option value="3">3+</option>
                <option value="4">4+</option>
              </select>
            </div>
            
            <div>
              <label className="text-sm font-medium text-gray-700 mb-1">Sort By</label>
              <select
                name="sort"
                value={filters.sort}
                onChange={handleFilterChange}
                className="w-full border border-slate-200 bg-white rounded-lg p-3 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              >
                <option value="newest">Newest</option>
                <option value="price_asc">Price (Low to High)</option>
                <option value="price_desc">Price (High to Low)</option>
                <option value="bedrooms">Most Bedrooms</option>
                <option value="bathrooms">Most Bathrooms</option>
              </select>
            </div>
          </div>
          
          <div className="mt-6 flex justify-end gap-3">
            <button 
              onClick={resetFilters}
              className="px-6 py-2 border border-slate-200 rounded-full text-slate-600 hover:bg-slate-50 transition-colors"
            >
              Reset
            </button>
            <button 
              onClick={applyFilters}
              className="px-8 py-2 bg-gradient-to-r from-indigo-600 to-indigo-800 text-white rounded-full hover:shadow-lg transition-all duration-300"
            >
              Apply Filters
            </button>
          </div>
        </div>
      </div>

      {/* Main content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Featured Slider */}
        <section className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent flex items-center">
              <Star className="h-6 w-6 mr-2 text-amber-400" />
              Featured Properties
            </h2>
            <div className="flex gap-2">
              <button className="p-2 rounded-full bg-white shadow-sm border border-slate-200 hover:border-indigo-300 transition-colors">
                <ChevronLeft size={18} className="text-slate-700" />
              </button>
              <button className="p-2 rounded-full bg-gradient-to-r from-indigo-600 to-indigo-800 shadow-sm hover:shadow-md transition-all duration-300">
                <ChevronRight size={18} className="text-white" />
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map(id => (
              <div key={id} className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group">
                <div className="relative">
                  <img 
                    src="/property.jpg" 
                    alt="Featured property" 
                    className="w-full h-52 object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-indigo-800 shadow-sm">
                    PREMIUM
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <h3 className="font-bold text-lg">Luxury Villa in Miami</h3>
                    <p className="text-white/80 text-sm">Miami Beach, Florida</p>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-bold text-xl text-indigo-900">$1,250,000</span>
                    <span className="text-sm font-medium px-3 py-1 bg-green-100 text-green-800 rounded-full">For Sale</span>
                  </div>
                  <div className="flex items-center text-sm text-slate-500 mb-3">
                    <MapPin size={14} className="mr-1" />
                    <p>Waterfront Estate, Miami Beach</p>
                  </div>
                  <div className="flex justify-between pt-3 border-t border-slate-100 text-slate-600">
                    <div className="flex gap-3">
                      <span className="flex items-center">
                        <span className="font-semibold mr-1">4</span> beds
                      </span>
                      <span className="flex items-center">
                        <span className="font-semibold mr-1">3</span> baths
                      </span>
                      <span className="flex items-center">
                        <span className="font-semibold mr-1">3,600</span> ft²
                      </span>
                    </div>
                    <button className="text-rose-500 hover:text-rose-600">
                      <Heart size={18} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        
        {/* Search results and sidebar */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main property listings */}
          <div className="flex-1">
            {/* View toggle and results count */}
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center bg-white rounded-full px-4 py-2 shadow-sm border border-slate-100">
                <span className="font-medium text-indigo-800 mr-2">{properties.length}</span> 
                <span className="text-slate-600">properties found</span>
              </div>
              
              <div className="flex bg-white rounded-full shadow-sm border border-slate-100 p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-full transition-all duration-300 ${viewMode === 'grid' ? 'bg-gradient-to-r from-indigo-600 to-indigo-800 text-white' : 'text-slate-600 hover:text-indigo-600'}`}
                >
                  <Grid3X3 size={18} />
                </button>
                <button
                  onClick={() => setViewMode('map')}
                  className={`p-2 rounded-full transition-all duration-300 ${viewMode === 'map' ? 'bg-gradient-to-r from-indigo-600 to-indigo-800 text-white' : 'text-slate-600 hover:text-indigo-600'}`}
                >
                  <Map size={18} />
                </button>
              </div>
            </div>
            
            {/* Properties grid */}
            {viewMode === 'grid' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6">
                {loading ? (
                  // Loading skeletons
                  Array(4).fill().map((_, index) => (
                    <div key={index} className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden animate-pulse">
                      <div className="w-full h-52 bg-slate-200"></div>
                      <div className="p-5">
                        <div className="h-6 bg-slate-200 rounded mb-3 w-3/4"></div>
                        <div className="h-4 bg-slate-200 rounded mb-4 w-1/2"></div>
                        <div className="flex gap-2 mb-4">
                          <div className="h-8 bg-slate-200 rounded w-16"></div>
                          <div className="h-8 bg-slate-200 rounded w-16"></div>
                          <div className="h-8 bg-slate-200 rounded w-16"></div>
                        </div>
                        <div className="h-12 bg-slate-200 rounded mb-3"></div>
                        <div className="h-5 bg-slate-200 rounded w-1/3"></div>
                      </div>
                    </div>
                  ))
                ) : (
                  properties.map(property => (
                    <div key={property.id} className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden group hover:shadow-lg transition-all duration-300">
                      <div className="relative">
                        <img 
                          src={property.mainImage} 
                          alt={property.title} 
                          className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110" 
                        />
                        
                        {/* Overlay on hover */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        
                        {/* Action buttons that appear on hover */}
                        <div className="absolute bottom-4 left-4 right-4 flex justify-between opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                          <button className="bg-white/90 backdrop-blur-sm text-slate-800 rounded-full px-4 py-2 text-sm font-medium hover:bg-white transition-colors shadow-sm">
                            View Details
                          </button>
                          <button 
                            onClick={() => toggleFavorite(property.id)}
                            className="bg-white/90 backdrop-blur-sm rounded-full p-2 hover:bg-white transition-colors shadow-sm"
                          >
                            <Heart 
                              size={18} 
                              className={property.isFavorite ? "text-rose-500 fill-rose-500" : "text-slate-600"} 
                            />
                          </button>
                        </div>
                        
                        {/* Property tag */}
                        {property.tag && (
                          <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-indigo-800 shadow-sm">
                            {property.tag}
                          </div>
                        )}
                        
                        {/* Price tag */}
                        <div className="absolute top-4 right-4 bg-gradient-to-r from-indigo-600 to-indigo-800 backdrop-blur-sm px-3 py-1 rounded-full text-white font-bold shadow-sm">
                          ${property.price.toLocaleString()}
                        </div>
                        
                        {/* Virtual tour badge */}
                        {property.virtualTour && (
                          <div className="absolute bottom-4 right-4 bg-blue-600/90 backdrop-blur-sm flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium text-white shadow-sm">
                            <Image size={12} /> 3D TOUR
                          </div>
                        )}
                      </div>
                      
                      {/* Property info */}
                      <div className="p-5">
                        <h3 className="font-bold text-lg text-slate-800 hover:text-indigo-600 transition-colors duration-300">
                          {property.title}
                        </h3>
                        
                        <div className="flex items-center mt-1 mb-3 text-slate-500 text-sm">
                          <MapPin size={14} className="mr-1" />
                          {property.location}
                        </div>
                        
                        {/* Property features */}
                        <div className="flex gap-4 mb-4">
                          {property.bedrooms >= 0 && (
                            <div className="flex flex-col items-center px-3 py-2 bg-slate-50 rounded-lg">
                              <span className="font-bold text-indigo-900">{property.bedrooms}</span>
                              <span className="text-xs text-slate-500">Beds</span>
                            </div>
                          )}
                          
                          {property.bathrooms && (
                            <div className="flex flex-col items-center px-3 py-2 bg-slate-50 rounded-lg">
                              <span className="font-bold text-indigo-900">{property.bathrooms}</span>
                              <span className="text-xs text-slate-500">Baths</span>
                            </div>
                          )}
                          
                          {property.area && (
                            <div className="flex flex-col items-center px-3 py-2 bg-slate-50 rounded-lg">
                              <span className="font-bold text-indigo-900">{property.area}</span>
                              <span className="text-xs text-slate-500">Sq Ft</span>
                            </div>
                          )}
                        </div>
                        
                        {/* Property description truncated */}
                        <p className="text-slate-600 text-sm line-clamp-2 mb-4">
                          {property.description}
                        </p>
                        
                        {/* Status and type */}
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full">
                            {property.status}
                          </span>
                          <span className="text-sm text-slate-500">
                            {property.type}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            ) : (
              <div className="bg-white rounded-2xl shadow-sm border border-slate-100 h-96 flex items-center justify-center">
                <p className="text-slate-500 flex flex-col items-center gap-3">
                  <Map size={40} className="text-indigo-300" />
                  Map view will be implemented soon
                </p>
              </div>
            )}
            
            {/* Pagination */}
            <div className="mt-10 flex justify-center">
              <div className="flex items-center gap-2 bg-white rounded-full shadow-sm border border-slate-100 p-1">
                <button className="w-10 h-10 flex items-center justify-center rounded-full text-slate-600 hover:bg-slate-50 transition-colors">
                  <ChevronLeft size={18} />
                </button>
                
                {[1, 2, 3, 4, 5].map(num => (
                  <button 
                    key={num}
                    className={`w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300 
                    ${currentPage === num ? 'bg-gradient-to-r from-indigo-600 to-indigo-800 text-white font-medium shadow-sm' : 'text-slate-600 hover:bg-slate-50'}`}
                    onClick={() => setCurrentPage(num)}
                  >
                    {num}
                  </button>
                ))}
                
                <button className="flex items-center justify-center px-4 h-10 rounded-full text-slate-600 hover:bg-slate-50 transition-colors">
                  ...
                </button>
                
                <button className="w-10 h-10 flex items-center justify-center rounded-full text-slate-600 hover:bg-slate-50 transition-colors">
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>
          
          {/* Sidebar */}
          <div className="w-full lg:w-80">
            {/* Mortgage calculator */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 mb-6">
              <h3 className="font-bold text-lg text-slate-800 mb-4 flex items-center">
                <span className="bg-gradient-to-r from-indigo-600 to-indigo-800 h-5 w-1 rounded mr-2"></span>
                Mortgage Calculator
              </h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm text-slate-600 mb-1">Purchase price ($)</label>
                  <input 
                    type="text" 
                    value="540,000" 
                    className="w-full border border-slate-200 bg-white rounded-lg p-3 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label className="block text-sm text-slate-600 mb-1">Down payment ($)</label>
                  <input 
                    type="text" 
                    value="110,000" 
                    className="w-full border border-slate-200 bg-white rounded-lg p-3 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label className="block text-sm text-slate-600 mb-1">Interest rate (%)</label>
                  <input 
                    type="text" 
                    value="4.75" 
                    className="w-full border border-slate-200 bg-white rounded-lg p-3 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label className="block text-sm text-slate-600 mb-1">Loan term (years)</label>
                  <select className="w-full border border-slate-200 bg-white rounded-lg p-3 focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-slate-800">
                    <option>30 years</option>
                    <option>25 years</option>
                    <option>20 years</option>
                    <option>15 years</option>
                  </select>
                </div>
            
            <div className="mb-5">
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-700 font-medium">Payment frequency</span>
                <Info size={14} className="text-gray-400 cursor-pointer hover:text-blue-600 transition-colors duration-300" />
              </div>
              <select className="border border-gray-300 rounded-lg p-2 text-sm w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 bg-white">
                <option>Weekly</option>
                <option>Bi-weekly</option>
                <option>Monthly</option>
              </select>
            </div>
            
            <button className="bg-gradient-to-r from-gray-800 to-black text-white w-full py-3 rounded-full text-sm font-medium shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2">
              <span>🔒</span> Get pre-approved now
            </button>
            
            <div className="flex justify-between text-xs mt-3 text-gray-500">
              <span>Legal information</span>
              <Info size={12} className="text-gray-400 cursor-pointer hover:text-blue-600 transition-colors duration-300" />
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-6 mb-6 overflow-hidden group">
            <img 
              src="/api/placeholder/320/200" 
              alt="The new rule for flipping properties in Canada" 
              className="w-full rounded-lg shadow-sm mb-2 transition-transform duration-500 group-hover:scale-105"
            />
            <h4 className="font-medium text-gray-800 mt-2 group-hover:text-blue-600 transition-colors duration-300">The new rule for flipping properties in Canada</h4>
          </div>
        </div>
      </div>
      </div>
</main>
    </div>
  );
}