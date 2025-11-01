"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Calendar, MapPin, Users, Car, Plane, Building, Golf, Clock, Phone, Mail, Star } from 'lucide-react'

export default function LisboaTransfersTours() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    message: ''
  })

  const [bookingData, setBookingData] = useState({
    service: '',
    date: '',
    time: '',
    passengers: '1',
    pickup: '',
    destination: ''
  })

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Contact form submitted:', formData)
    alert('Thank you for your inquiry! We will contact you soon.')
    setFormData({ name: '', email: '', phone: '', service: '', date: '', message: '' })
  }

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Booking submitted:', bookingData)
    alert('Booking request submitted! We will confirm your reservation shortly.')
    setBookingData({ service: '', date: '', time: '', passengers: '1', pickup: '', destination: '' })
  }

  const tours = [
    {
      title: "Lisbon City Tour",
      description: "Explore the historic neighborhoods of Alfama, Bairro Alto, and Belém. Visit iconic landmarks including Jerónimos Monastery, Belém Tower, and Fado houses.",
      duration: "4-6 hours",
      price: "From €45/person",
      image: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=600&h=400&fit=crop"
    },
    {
      title: "Cascais & Estoril Tour",
      description: "Discover the Portuguese Riviera with its beautiful beaches, elegant resorts, and the famous Casino Estoril. Perfect for business relaxation.",
      duration: "Half day",
      price: "From €55/person",
      image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600&h=400&fit=crop"
    },
    {
      title: "Sintra Fairy Tale Tour",
      description: "Visit the romantic Pena Palace, Quinta da Regaleira, and Sintra's historic center. UNESCO World Heritage site experience.",
      duration: "Full day",
      price: "From €65/person",
      image: "https://images.unsplash.com/photo-1509600110300-21b2d5c7e61a?w=600&h=400&fit=crop"
    },
    {
      title: "Fátima Pilgrimage Tour",
      description: "Spiritual journey to one of the world's most important Catholic pilgrimage sites. Includes Sanctuary visit and religious ceremonies.",
      duration: "Full day",
      price: "From €60/person",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop"
    },
    {
      title: "Óbidos Medieval Village",
      description: "Step back in time in this perfectly preserved medieval town. Walk the ancient walls and taste the famous Ginja liqueur.",
      duration: "Half day",
      price: "From €50/person",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=400&fit=crop"
    },
    {
      title: "Nazaré Coastal Experience",
      description: "Famous for giant waves and traditional fishing culture. Visit the lighthouse, traditional market, and enjoy fresh seafood.",
      duration: "Half day",
      price: "From €55/person",
      image: "https://images.unsplash.com/photo-1582719471137-c3967ffb1c42?w=600&h=400&fit=crop"
    }
  ]

  const golfCourses = [
    {
      name: "Dunas Comporta Golf Course",
      description: "Championship course designed by David McLay Kidd, featuring stunning dune landscapes and ocean views.",
      location: "Comporta",
      holes: "18 holes",
      image: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=600&h=400&fit=crop"
    },
    {
      name: "Troia Golf Course",
      description: "Robert Trent Jones designed course with spectacular views over the Atlantic Ocean and Sado River.",
      location: "Troia Peninsula",
      holes: "18 holes",
      image: "https://images.unsplash.com/photo-1587174486073-ae5e5cec4ba1?w=600&h=400&fit=crop"
    },
    {
      name: "Quinta do Peru Golf & Country Club",
      description: "Rocky Roquemore designed course offering challenging play in a beautiful natural setting.",
      location: "Azeitão",
      holes: "18 holes",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop"
    },
    {
      name: "PGA Aroeira Golf Course",
      description: "Two championship courses (Aroeira I & II) hosting European Tour events, perfect for corporate golf events.",
      location: "Aroeira",
      holes: "36 holes",
      image: "https://images.unsplash.com/photo-1593111774240-d529f12cf4bb?w=600&h=400&fit=crop"
    }
  ]

  const events = [
    { date: "2024-03-15", title: "Web Summit Lisbon", location: "Altice Arena", type: "Technology" },
    { date: "2024-04-10", title: "Portugal Fashion Week", location: "Various Venues", type: "Fashion" },
    { date: "2024-05-20", title: "Lisbon Investment Summit", location: "CCB", type: "Business" },
    { date: "2024-06-05", title: "Rock in Rio Lisboa", location: "Bela Vista Park", type: "Music" },
    { date: "2024-07-12", title: "NOS Alive Festival", location: "Algés", type: "Music" },
    { date: "2024-09-18", title: "Lisbon Architecture Triennale", location: "Various Venues", type: "Architecture" }
  ]

  const portoEvents = [
    { date: "2024-03-22", title: "Porto Business Forum", location: "Alfândega do Porto", type: "Business" },
    { date: "2024-05-15", title: "Primavera Sound Porto", location: "Parque da Cidade", type: "Music" },
    { date: "2024-06-24", title: "São João Festival", location: "Historic Center", type: "Cultural" },
    { date: "2024-08-10", title: "Porto Wine Festival", location: "Vila Nova de Gaia", type: "Gastronomy" }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Car className="h-8 w-8 text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-900">Lisboa Transfers Tours</h1>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a href="#tours" className="text-gray-700 hover:text-blue-600 transition-colors">Tours</a>
              <a href="#golf" className="text-gray-700 hover:text-blue-600 transition-colors">Golf</a>
              <a href="#events" className="text-gray-700 hover:text-blue-600 transition-colors">Events</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[600px] bg-cover bg-center" style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=1200&h=600&fit=crop')"
      }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl text-white">
            <h2 className="text-5xl font-bold mb-6">Premium Tours & Transfers in Portugal</h2>
            <p className="text-xl mb-8">
              Elevate your business stay in Lisbon with exclusive tours, premium transfers, and unforgettable experiences. 
              Perfect for corporate events, conferences, and executive travel.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Calendar className="mr-2 h-5 w-5" />
                Book Now
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white/20">
                <Phone className="mr-2 h-5 w-5" />
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Premium Services</h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Tailored experiences for business travelers, corporate groups, and discerning individuals seeking quality and excellence.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Car className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>Premium Transfers</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Luxury vehicles for airport transfers, hotel pickups, and executive transportation.</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <MapPin className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <CardTitle>Cultural Tours</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Guided tours of Lisbon, Sintra, Cascais, Fátima, Óbidos, and Nazaré with expert guides.</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Building className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <CardTitle>Corporate Events</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Complete event management for conferences, meetings, and corporate gatherings.</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Golf className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                <CardTitle>Golf Experiences</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Exclusive access to premium golf courses with professional instruction and transfers.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Tours Section */}
      <section id="tours" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Signature Tours</h3>
            <p className="text-lg text-gray-600">Discover Portugal's most captivating destinations with our expert-guided tours</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tours.map((tour, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${tour.image})` }}></div>
                <CardHeader>
                  <CardTitle className="text-xl">{tour.title}</CardTitle>
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary" className="flex items-center">
                      <Clock className="w-3 h-3 mr-1" />
                      {tour.duration}
                    </Badge>
                    <span className="text-lg font-semibold text-blue-600">{tour.price}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{tour.description}</p>
                  <Button className="w-full">Book This Tour</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Golf Section */}
      <section id="golf" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Premium Golf Experiences</h3>
            <p className="text-lg text-gray-600">
              Exclusive transfers to Portugal's finest golf courses with professional instruction available
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {golfCourses.map((course, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-64 bg-cover bg-center" style={{ backgroundImage: `url(${course.image})` }}></div>
                <CardHeader>
                  <CardTitle className="text-xl">{course.name}</CardTitle>
                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className="flex items-center">
                      <MapPin className="w-3 h-3 mr-1" />
                      {course.location}
                    </Badge>
                    <Badge className="flex items-center">
                      <Golf className="w-3 h-3 mr-1" />
                      {course.holes}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{course.description}</p>
                  <div className="flex gap-2">
                    <Button className="flex-1">Book Transfer</Button>
                    <Button variant="outline" className="flex-1">Golf Lessons</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 text-white">
            <div className="text-center">
              <h4 className="text-2xl font-bold mb-4">Additional Golf Services</h4>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h5 className="font-semibold mb-2">YesExperiences Portugal</h5>
                  <p className="text-green-100">Customized golf packages and experiences</p>
                </div>
                <div>
                  <h5 className="font-semibold mb-2">Edge Golf Academy</h5>
                  <p className="text-green-100">Professional golf instruction and clinics</p>
                </div>
                <div>
                  <h5 className="font-semibold mb-2">Setúbal & Troia Lessons</h5>
                  <p className="text-green-100">Golf lessons in stunning coastal settings</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Events Calendar */}
      <section id="events" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Upcoming Events</h3>
            <p className="text-lg text-gray-600">Plan your visit around major conferences, fairs, and cultural events</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="mr-2 h-5 w-5 text-blue-600" />
                  Lisbon Events
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {events.map((event, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-white rounded-lg border">
                      <div>
                        <h5 className="font-semibold text-gray-900">{event.title}</h5>
                        <p className="text-sm text-gray-600 flex items-center">
                          <MapPin className="w-3 h-3 mr-1" />
                          {event.location}
                        </p>
                      </div>
                      <div className="text-right">
                        <Badge>{event.type}</Badge>
                        <p className="text-sm text-gray-500 mt-1">{event.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="mr-2 h-5 w-5 text-purple-600" />
                  Porto Events
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {portoEvents.map((event, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-white rounded-lg border">
                      <div>
                        <h5 className="font-semibold text-gray-900">{event.title}</h5>
                        <p className="text-sm text-gray-600 flex items-center">
                          <MapPin className="w-3 h-3 mr-1" />
                          {event.location}
                        </p>
                      </div>
                      <div className="text-right">
                        <Badge variant="secondary">{event.type}</Badge>
                        <p className="text-sm text-gray-500 mt-1">{event.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Business Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Corporate & Business Services</h3>
            <p className="text-lg text-gray-600">Comprehensive solutions for business travelers and corporate events</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Building className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                <CardTitle>Conference Support</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-left space-y-2 text-gray-600">
                  <li>• Airport meet & greet services</li>
                  <li>• Group transportation coordination</li>
                  <li>• Hotel transfers and logistics</li>
                  <li>• VIP concierge services</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="h-16 w-16 text-green-600 mx-auto mb-4" />
                <CardTitle>Corporate Events</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-left space-y-2 text-gray-600">
                  <li>• Team building activities</li>
                  <li>• Executive retreats</li>
                  <li>• Client entertainment</li>
                  <li>• Incentive travel programs</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Plane className="h-16 w-16 text-purple-600 mx-auto mb-4" />
                <CardTitle>Executive Travel</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-left space-y-2 text-gray-600">
                  <li>• Luxury vehicle fleet</li>
                  <li>• Professional chauffeurs</li>
                  <li>• 24/7 availability</li>
                  <li>• Multi-city coordination</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact & Booking Section */}
      <section id="contact" className="py-16 bg-gradient-to-br from-blue-600 to-purple-700">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">Contact Us & Book Your Experience</h3>
            <p className="text-lg text-blue-100">Get in touch or make a reservation for your premium Portugal experience</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Mail className="mr-2 h-5 w-5 text-blue-600" />
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <Input
                      placeholder="Full Name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                    />
                    <Input
                      type="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required
                    />
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <Input
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                    <Input
                      placeholder="Service Interest"
                      value={formData.service}
                      onChange={(e) => setFormData({...formData, service: e.target.value})}
                    />
                  </div>
                  <Input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({...formData, date: e.target.value})}
                  />
                  <Textarea
                    placeholder="Tell us about your requirements..."
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  />
                  <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                    Send Inquiry
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Booking Form */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="mr-2 h-5 w-5 text-green-600" />
                  Quick Booking
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleBookingSubmit} className="space-y-4">
                  <select
                    className="w-full p-2 border rounded-md"
                    value={bookingData.service}
                    onChange={(e) => setBookingData({...bookingData, service: e.target.value})}
                    required
                  >
                    <option value="">Select Service</option>
                    <option value="airport-transfer">Airport Transfer</option>
                    <option value="lisbon-tour">Lisbon City Tour</option>
                    <option value="sintra-tour">Sintra Tour</option>
                    <option value="golf-transfer">Golf Course Transfer</option>
                    <option value="corporate-event">Corporate Event</option>
                  </select>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <Input
                      type="date"
                      value={bookingData.date}
                      onChange={(e) => setBookingData({...bookingData, date: e.target.value})}
                      required
                    />
                    <Input
                      type="time"
                      value={bookingData.time}
                      onChange={(e) => setBookingData({...bookingData, time: e.target.value})}
                      required
                    />
                  </div>
                  
                  <select
                    className="w-full p-2 border rounded-md"
                    value={bookingData.passengers}
                    onChange={(e) => setBookingData({...bookingData, passengers: e.target.value})}
                  >
                    <option value="1">1 Passenger</option>
                    <option value="2">2 Passengers</option>
                    <option value="3">3 Passengers</option>
                    <option value="4">4 Passengers</option>
                    <option value="5+">5+ Passengers</option>
                  </select>
                  
                  <Input
                    placeholder="Pickup Location"
                    value={bookingData.pickup}
                    onChange={(e) => setBookingData({...bookingData, pickup: e.target.value})}
                    required
                  />
                  
                  <Input
                    placeholder="Destination"
                    value={bookingData.destination}
                    onChange={(e) => setBookingData({...bookingData, destination: e.target.value})}
                    required
                  />
                  
                  <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
                    Book Now
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="mt-12 text-center text-white">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <Phone className="h-8 w-8 mx-auto mb-2" />
                <h4 className="font-semibold mb-2">Phone</h4>
                <p className="text-blue-100">+351 XXX XXX XXX</p>
              </div>
              <div>
                <Mail className="h-8 w-8 mx-auto mb-2" />
                <h4 className="font-semibold mb-2">Email</h4>
                <p className="text-blue-100">info@lisbontransferstours.com</p>
              </div>
              <div>
                <MapPin className="h-8 w-8 mx-auto mb-2" />
                <h4 className="font-semibold mb-2">Location</h4>
                <p className="text-blue-100">Lisbon, Portugal</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Car className="h-8 w-8 text-blue-400" />
                <h4 className="text-xl font-bold">Lisboa Transfers Tours</h4>
              </div>
              <p className="text-gray-400">
                Premium tours and transfers for discerning travelers and corporate clients in Portugal.
              </p>
            </div>
            
            <div>
              <h5 className="font-semibold mb-4">Services</h5>
              <ul className="space-y-2 text-gray-400">
                <li>Airport Transfers</li>
                <li>City Tours</li>
                <li>Golf Transfers</li>
                <li>Corporate Events</li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-semibold mb-4">Destinations</h5>
              <ul className="space-y-2 text-gray-400">
                <li>Lisbon</li>
                <li>Sintra</li>
                <li>Cascais</li>
                <li>Fátima</li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-semibold mb-4">Contact</h5>
              <ul className="space-y-2 text-gray-400">
                <li>24/7 Support</li>
                <li>Online Booking</li>
                <li>Custom Packages</li>
                <li>Group Discounts</li>
              </ul>
            </div>
          </div>
          
          <Separator className="my-8 bg-gray-700" />
          
          <div className="text-center text-gray-400">
            <p>&copy; 2024 Lisboa Transfers Tours. All rights reserved. | Premium Portugal Experiences</p>
          </div>
        </div>
      </footer>
    </div>
  )
}