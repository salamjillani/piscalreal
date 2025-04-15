import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Heart, Info, MapPin, Grid, MapIcon, Star, Mail, Save, Phone, Search } from 'lucide-react';
import Button from '../../components/common/Button';
import PropertyList from '../../components/property/PropertyList';

export default function PropertySearch() {
  const location = useLocation();
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [favorites, setFavorites] = useState([]);
  const [viewMode, setViewMode] = useState('grid'); // grid or map
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
    
    // Update the properties with favorite status
    setProperties(prevProperties => 
      prevProperties.map(property => 
        property.id === propertyId 
          ? { ...property, isFavorite: !property.isFavorite } 
          : property
      )
    );
  };

  useEffect(() => {
    // Get search query from URL
    const searchParams = new URLSearchParams(location.search);
    searchParams.get('q'); // Retrieve the query parameter without assigning it to a variable

    // Fetch properties from API (mock data for now)
    setLoading(true);
    
    // This would be replaced with an actual API call
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
          mainImage: '/api/placeholder/400/300',
          isFavorite: favorites.includes(1),
          description: "Automated translation\nBeautiful apartment with amazing view of the city skyline. Perfect location, close to all amenities."
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
          mainImage: '/api/placeholder/400/300',
          isFavorite: favorites.includes(2),
          description: "Automated translation\nSpacious family home with 4 bedrooms and a beautiful backyard. Great for growing families."
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
          tag: "BEST PRICE IN THE AREA",
          tagColor: "bg-yellow-500",
          mainImage: '/api/placeholder/400/300',
          isFavorite: favorites.includes(3),
          description: "Automated translation\nLuxurious penthouse with breathtaking views of the city. High-end finishes throughout."
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
          tag: "QUICK OCCUPANCY POSSIBLE",
          tagColor: "bg-orange-500",
          virtualTour: true,
          mainImage: '/api/placeholder/400/300',
          isRental: true,
          isFavorite: favorites.includes(4),
          description: "Automated translation\nCozy studio apartment in a trendy Brooklyn neighborhood. Perfect for young professionals."
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
          mainImage: '/api/placeholder/400/300',
          isFavorite: favorites.includes(5),
          description: "Automated translation\nStunning waterfront villa with private beach access. Ultimate luxury living."
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
          tag: "SOLD WITH TAX REBATES",
          tagColor: "bg-purple-500",
          virtualTour: true,
          mainImage: '/api/placeholder/400/300',
          isFavorite: favorites.includes(6),
          description: "Automated translation\nChic downtown loft with high ceilings and original exposed brick. Perfect urban living."
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

  const featuredHomes = [
    { id: 1, location: 'Rosemere', price: '$679,800', image: '/api/placeholder/400/300' },
    { id: 2, location: 'Gatineau (Aylmer)', price: '$295,000', image: '/api/placeholder/400/300' },
    { id: 3, location: 'St-Germain-De-Grantham', price: '$582,000', image: '/api/placeholder/400/300' },
    { id: 4, location: 'St-Lambert', price: '$299,000', image: '/api/placeholder/400/300', tag: 'OPEN HOUSE' },
    { id: 5, location: 'Mercier', price: '$560,900', image: '/api/placeholder/400/300' },
    { id: 6, location: 'Gatineau (Gatineau)', price: '$494,999', image: '/api/placeholder/400/300' },
  ];

  const pageNumbers = [1, 2, 3, 4, 5];

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
    // This would typically trigger an API call with the filter parameters
    console.log("Applying filters:", filters);
    
    // For demo purposes, simulate a loading state
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 800);
  };

  return (
    <div className="bg-gray-50 min-h-screen font-sans text-gray-800">
    
      
      {/* Featured Homes Section */}
      <div className="bg-white p-6 mb-6 shadow-md rounded-lg max-w-7xl mx-auto">
        <div className="flex justify-between mb-4 items-center">
          <h2 className="text-gray-800 font-semibold text-lg flex items-center">
            <Star className="h-5 w-5 text-yellow-500 mr-2" />
            Featured Homes
          </h2>
          <div className="text-right">
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-4 py-2 rounded-full text-sm font-medium shadow-md hover:shadow-lg transition-all duration-300">
              Featured builder
            </div>
          </div>
        </div>
        
        <div className="relative">
          <div className="flex overflow-x-auto pb-2 gap-3 scrollbar-hide">
            {featuredHomes.map(home => (
              <div key={home.id} className="min-w-max relative group">
                <div className="overflow-hidden rounded-lg shadow-md transition-all duration-300 transform group-hover:scale-105">
                  <img src={home.image} alt={home.location} className="w-48 h-32 object-cover transition-transform duration-500 group-hover:scale-110" />
                </div>
                {home.tag && (
                  <div className="absolute top-2 right-2 bg-red-600 text-white text-xs py-1 px-2 rounded-full font-semibold">
                    {home.tag}
                  </div>
                )}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent text-white p-2 rounded-b-lg">
                  <div className="text-sm font-medium">{home.location}</div>
                  <div className="font-bold">{home.price}</div>
                </div>
              </div>
            ))}
          </div>
          <button className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg text-blue-600 opacity-80 hover:opacity-100 transition-opacity duration-300">
            <ChevronLeft size={20} />
          </button>
          <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg text-blue-600 opacity-80 hover:opacity-100 transition-opacity duration-300">
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
     

        {/* Filters */}
        <div className="bg-white shadow-md rounded-lg p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
            <div>
              <label htmlFor="propertyType" className="block text-sm font-medium text-gray-700 mb-1">Property Type</label>
              <select
                id="propertyType"
                name="propertyType"
                value={filters.propertyType}
                onChange={handleFilterChange}
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
              <label htmlFor="minPrice" className="block text-sm font-medium text-gray-700 mb-1">Min Price</label>
              <input
                type="number"
                id="minPrice"
                name="minPrice"
                value={filters.minPrice}
                onChange={handleFilterChange}
                placeholder="Min Price"
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <div>
              <label htmlFor="maxPrice" className="block text-sm font-medium text-gray-700 mb-1">Max Price</label>
              <input
                type="number"
                id="maxPrice"
                name="maxPrice"
                value={filters.maxPrice}
                onChange={handleFilterChange}
                placeholder="Max Price"
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <div>
              <label htmlFor="bedrooms" className="block text-sm font-medium text-gray-700 mb-1">Bedrooms</label>
              <select
                id="bedrooms"
                name="bedrooms"
                value={filters.bedrooms}
                onChange={handleFilterChange}
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
              <label htmlFor="bathrooms" className="block text-sm font-medium text-gray-700 mb-1">Bathrooms</label>
              <select
                id="bathrooms"
                name="bathrooms"
                value={filters.bathrooms}
                onChange={handleFilterChange}
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Any</option>
                <option value="1">1+</option>
                <option value="2">2+</option>
                <option value="3">3+</option>
                <option value="4">4+</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="sort" className="block text-sm font-medium text-gray-700 mb-1">Sort By</label>
              <select
                id="sort"
                name="sort"
                value={filters.sort}
                onChange={handleFilterChange}
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="newest">Newest</option>
                <option value="price_asc">Price (Low to High)</option>
                <option value="price_desc">Price (High to Low)</option>
                <option value="bedrooms">Most Bedrooms</option>
                <option value="bathrooms">Most Bathrooms</option>
              </select>
            </div>
          </div>
          
          <div className="mt-6 flex justify-end">
            <Button variant="light" className="mr-2" onClick={resetFilters}>
              Reset Filters
            </Button>
            <Button onClick={applyFilters}>
              Apply Filters
            </Button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col md:flex-row gap-6">
          <div className="w-full md:w-3/4">
            {/* Search Results Header */}
            <div className="flex justify-between items-center mb-6 bg-white p-4 rounded-lg shadow-md">
              <div className="text-green-600 font-bold flex items-center">
                <Search className="mr-2 h-5 w-5" />
                <span className="text-lg">{properties.length} properties found</span>
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-md ${viewMode === 'grid' ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600'}`}
                >
                  <Grid className="h-5 w-5" />
                </button>
                <button
                  onClick={() => setViewMode('map')}
                  className={`p-2 rounded-md ${viewMode === 'map' ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600'}`}
                >
                  <MapIcon className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Property List or Map View */}
            {viewMode === 'grid' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-8">
                {loading ? (
                  // Loading skeleton
                  Array(6).fill().map((_, index) => (
                    <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden animate-pulse">
                      <div className="w-full h-52 bg-gray-200"></div>
                      <div className="p-4">
                        <div className="h-6 bg-gray-200 rounded mb-2"></div>
                        <div className="h-4 bg-gray-200 rounded mb-2 w-3/4"></div>
                        <div className="h-4 bg-gray-200 rounded mb-3 w-1/2"></div>
                        <div className="h-16 bg-gray-200 rounded mb-4"></div>
                        <div className="flex justify-between">
                          <div className="h-5 bg-gray-200 rounded w-1/3"></div>
                          <div className="h-5 bg-gray-200 rounded w-1/3"></div>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  properties.map(property => (
                    <div key={property.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                      <div className="relative group">
                        <img 
                          src={property.mainImage} 
                          alt={property.title} 
                          className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-110" 
                        />
                        <button 
                          className="absolute bottom-3 right-3 bg-white rounded-full p-2 shadow-lg transform transition-transform duration-300 hover:scale-110"
                          onClick={() => toggleFavorite(property.id)}
                        >
                          <Heart 
                            size={18} 
                            className={property.isFavorite ? "text-red-500 fill-red-500" : "text-gray-500"} 
                          />
                        </button>
                        
                        {property.tag && (
                          <div className={`absolute top-3 left-3 ${property.tagColor} text-white text-xs px-3 py-1 rounded-full font-semibold shadow-md`}>
                            {property.tag}
                          </div>
                        )}
                        
                        {property.virtualTour && (
                          <div className="absolute bottom-3 left-3 bg-blue-600 text-white text-xs px-3 py-1 rounded-full font-semibold flex items-center gap-1 shadow-md">
                            <span>3D</span> VIRTUAL TOUR
                          </div>
                        )}
                      </div>
                      
                      <div className="p-4">
                        <div className="flex justify-between mb-2">
                          <div className="font-bold text-xl text-blue-900">${property.price.toLocaleString()}</div>
                        </div>
                        <div className="text-sm font-medium flex items-center mb-1 text-gray-700">
                          <MapPin size={14} className="mr-1 text-blue-600" />
                          {property.location}
                        </div>
                        <div className="text-xs text-gray-600 mb-3">{property.address}</div>
                        
                        <div className="text-sm text-gray-600 mb-4 h-16 overflow-hidden">
                          {property.description}
                        </div>
                        
                        <div className="flex justify-between text-xs text-gray-700 border-t pt-3">
                          <div className="flex gap-4">
                            {property.bedrooms >= 0 && (
                              <div className="flex items-center gap-1">
                                <div className="bg-blue-50 p-1 rounded">
                                  <span className="text-blue-600">🛏️</span>
                                </div>
                                <span className="font-medium">{property.bedrooms}</span>
                              </div>
                            )}
                            {property.bathrooms && (
                              <div className="flex items-center gap-1">
                                <div className="bg-blue-50 p-1 rounded">
                                  <span className="text-blue-600">🚿</span>
                                </div>
                                <span className="font-medium">{property.bathrooms}</span>
                              </div>
                            )}
                            {property.area && (
                              <div className="flex items-center gap-1">
                                <div className="bg-blue-50 p-1 rounded">
                                  <span className="text-blue-600">📏</span>
                                </div>
                                <span className="font-medium">{property.area}</span>
                              </div>
                            )}
                          </div>
                          
                          {property.lotSize && (
                            <div className="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded">
                              <span>🏞️</span> <span className="font-medium">{property.lotSize}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            ) : (
              <div className="bg-gray-100 rounded-lg h-96 flex items-center justify-center">
                <p className="text-gray-500">Map view will be implemented with Google Maps or Mapbox</p>
              </div>
            )}

            {/* Property Advertisement */}
            <div className="bg-gradient-to-r from-blue-100 to-indigo-100 p-4 mb-6 rounded-lg shadow-md">
              <div className="text-blue-800 font-medium text-center">Premium Listings Available</div>
            </div>

            {/* Pagination */}
            <div className="flex justify-between items-center mt-8 mb-6">
              <div className="flex gap-3 items-center">
                
              </div>
              
              <div className="flex gap-2">
                <button 
                  className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-full bg-white text-gray-400"
                  disabled={currentPage === 1}
                >
                  <ChevronLeft size={16} />
                </button>
                
                {pageNumbers.map((num) => (
                  <button 
                    key={num}
                    className={`w-10 h-10 flex items-center justify-center rounded-full ${currentPage === num ? 'bg-blue-600 text-white font-bold shadow-md' : 'bg-white border border-gray-300 hover:bg-blue-50 transition-colors duration-300'}`}
                    onClick={() => setCurrentPage(num)}
                  >
                    {num}
                  </button>
                ))}
                
                <button className="px-3 text-gray-600 font-bold">...</button>
                
                <button className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-full bg-white hover:bg-blue-50 transition-colors duration-300">
                  8
                </button>
                
                <button 
                  className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-full bg-white hover:bg-blue-50 transition-colors duration-300"
                  onClick={() => currentPage < 5 && setCurrentPage(currentPage + 1)}
                >
                  <ChevronRight size={16} />
                </button>
                
                <button 
                  className="border border-gray-300 bg-white rounded-full px-4 py-2 text-sm font-medium hover:bg-blue-50 transition-colors duration-300 flex items-center"
                  onClick={() => currentPage < 5 && setCurrentPage(currentPage + 1)}
                >
                  Next <ChevronRight size={14} className="ml-1" />
                </button>
              </div>
            </div>
          </div>
           {/* Sidebar */}
        <div className="w-full md:w-1/4">
          <div className="bg-white rounded-xl shadow-md p-6 mb-6">
            <img src="/api/placeholder/320/200" alt="Les Habitations Entourages Inc." className="w-full mb-4 rounded-lg shadow-sm" />
            <div className="flex flex-col gap-3">
              <button className="bg-gradient-to-r from-gray-800 to-gray-900 text-white text-center py-3 rounded-full text-sm font-medium shadow-md hover:shadow-lg transition-all duration-300">View all properties by this builder</button>
              <button className="border border-gray-300 text-center py-3 rounded-full text-sm font-medium hover:bg-gray-50 transition-colors duration-300">Go to the builder's website</button>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-6 mb-6">
            <div className="flex items-center mb-4">
              <h3 className="font-bold text-lg text-gray-800">Mortgage Calculator</h3>
              <div className="ml-2 bg-blue-600 h-1 flex-grow rounded-full"></div>
            </div>
            
            <div className="flex justify-between text-sm mb-3 bg-gray-50 p-3 rounded-lg">
              <span className="text-gray-700">Mortgage Amount</span>
              <div className="font-bold flex gap-1 items-center">
                <span className="text-green-600">$230,000</span>
                <div className="flex items-center gap-1 bg-green-100 px-2 py-1 rounded-full text-xs">
                  <div className="h-2 w-2 bg-green-500 rounded-full"></div>
                  <span className="text-green-800">Desjardins</span>
                </div>
              </div>
            </div>
            
            <div className="flex justify-between text-sm mb-4 bg-gray-50 p-3 rounded-lg">
              <span className="text-gray-700">Weekly Payment</span>
              <span className="font-bold text-blue-800">$460</span>
            </div>
            
            <div className="mb-5">
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-700 font-medium">Purchase price ($)</span>
                <Info size={14} className="text-gray-400 cursor-pointer hover:text-blue-600 transition-colors duration-300" />
              </div>
              <div className="flex items-center gap-2">
                <input type="text" value="540000" className="border border-gray-300 rounded-lg p-2 text-sm w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300" />
                <input type="range" className="w-full accent-blue-600" />
              </div>
            </div>
            
            <div className="mb-5">
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-700 font-medium">Down payment ($)</span>
                <Info size={14} className="text-gray-400 cursor-pointer hover:text-blue-600 transition-colors duration-300" />
              </div>
              <div className="flex items-center gap-2">
                <input type="text" value="$80,000" className="border border-gray-300 rounded-lg p-2 text-sm w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300" />
                <input type="range" className="w-full accent-blue-600" />
              </div>
            </div>
            
            <div className="mb-5">
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-700 font-medium">Interest rate (%)</span>
                <Info size={14} className="text-gray-400 cursor-pointer hover:text-blue-600 transition-colors duration-300" />
              </div>
              <div className="flex items-center gap-2">
                <input type="text" value="5.50" className="border border-gray-300 rounded-lg p-2 text-sm w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300" />
                <input type="range" className="w-full accent-blue-600" />
              </div>
            </div>
            
            <div className="mb-5">
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-700 font-medium">Amortization (years)</span>
                <Info size={14} className="text-gray-400 cursor-pointer hover:text-blue-600 transition-colors duration-300" />
              </div>
              <select className="border border-gray-300 rounded-lg p-2 text-sm w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 bg-white">
                <option>25 years</option>
                <option>30 years</option>
                <option>20 years</option>
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

    </div>
  );
}