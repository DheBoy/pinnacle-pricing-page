import React from 'react';
import { Shield, Users, MessageCircle, Megaphone, FileText, CheckCircle, Phone, Mail } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-slate-900">Pinnacle Management</h1>
                <p className="text-sm text-slate-600">Professional Community Services</p>
              </div>
            </div>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200">
              Get Started
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
            Service Packages & Pricing
          </h2>
          <p className="text-xl text-slate-600 mb-8 leading-relaxed">
            Professional community management solutions tailored to your needs. 
            Choose from our comprehensive service packages designed to grow your community.
          </p>
        </div>
      </section>

      {/* Raiders & Shillers Package */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-xl mb-4">
              <Users className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-3xl font-bold text-slate-900 mb-3">Raiders & Shillers Packages</h3>
            <p className="text-slate-600 text-lg">Daily coverage with weekly pricing options</p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="text-left py-4 px-6 font-semibold text-slate-900">Team Size</th>
                    <th className="text-center py-4 px-6 font-semibold text-slate-900">8hrs/day</th>
                    <th className="text-center py-4 px-6 font-semibold text-slate-900">12hrs/day</th>
                    <th className="text-center py-4 px-6 font-semibold text-slate-900">24hrs/day</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-6 px-6 font-medium text-slate-900">5 Members</td>
                    <td className="py-6 px-6 text-center">
                      <div className="text-2xl font-bold text-blue-600">$75</div>
                      <div className="text-sm text-slate-500">/week</div>
                    </td>
                    <td className="py-6 px-6 text-center">
                      <div className="text-2xl font-bold text-blue-600">$100</div>
                      <div className="text-sm text-slate-500">/week</div>
                    </td>
                    <td className="py-6 px-6 text-center">
                      <div className="text-2xl font-bold text-blue-600">$150</div>
                      <div className="text-sm text-slate-500">/week</div>
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-6 px-6 font-medium text-slate-900">10 Members</td>
                    <td className="py-6 px-6 text-center">
                      <div className="text-2xl font-bold text-blue-600">$150</div>
                      <div className="text-sm text-slate-500">/week</div>
                    </td>
                    <td className="py-6 px-6 text-center">
                      <div className="text-2xl font-bold text-blue-600">$200</div>
                      <div className="text-sm text-slate-500">/week</div>
                    </td>
                    <td className="py-6 px-6 text-center">
                      <div className="text-2xl font-bold text-blue-600">$300</div>
                      <div className="text-sm text-slate-500">/week</div>
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-6 px-6 font-medium text-slate-900">30 Members</td>
                    <td className="py-6 px-6 text-center">
                      <div className="text-2xl font-bold text-blue-600">$300</div>
                      <div className="text-sm text-slate-500">/week</div>
                    </td>
                    <td className="py-6 px-6 text-center">
                      <div className="text-2xl font-bold text-blue-600">$400</div>
                      <div className="text-sm text-slate-500">/week</div>
                    </td>
                    <td className="py-6 px-6 text-center">
                      <div className="text-2xl font-bold text-blue-600">$700</div>
                      <div className="text-sm text-slate-500">/week</div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Chatters Package */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-teal-100 rounded-xl mb-4">
              <MessageCircle className="w-8 h-8 text-teal-600" />
            </div>
            <h3 className="text-3xl font-bold text-slate-900 mb-3">Chatters Packages</h3>
            <p className="text-slate-600 text-lg">Daily coverage with weekly pricing options</p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="text-left py-4 px-6 font-semibold text-slate-900">Team Size</th>
                    <th className="text-center py-4 px-6 font-semibold text-slate-900">8hrs/day</th>
                    <th className="text-center py-4 px-6 font-semibold text-slate-900">12hrs/day</th>
                    <th className="text-center py-4 px-6 font-semibold text-slate-900">24hrs/day</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-6 px-6 font-medium text-slate-900">5 Members</td>
                    <td className="py-6 px-6 text-center">
                      <div className="text-2xl font-bold text-teal-600">$75</div>
                      <div className="text-sm text-slate-500">/week</div>
                    </td>
                    <td className="py-6 px-6 text-center">
                      <div className="text-2xl font-bold text-teal-600">$100</div>
                      <div className="text-sm text-slate-500">/week</div>
                    </td>
                    <td className="py-6 px-6 text-center">
                      <div className="text-2xl font-bold text-teal-600">$150</div>
                      <div className="text-sm text-slate-500">/week</div>
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-6 px-6 font-medium text-slate-900">10 Members</td>
                    <td className="py-6 px-6 text-center">
                      <div className="text-2xl font-bold text-teal-600">$150</div>
                      <div className="text-sm text-slate-500">/week</div>
                    </td>
                    <td className="py-6 px-6 text-center">
                      <div className="text-2xl font-bold text-teal-600">$225</div>
                      <div className="text-sm text-slate-500">/week</div>
                    </td>
                    <td className="py-6 px-6 text-center">
                      <div className="text-2xl font-bold text-teal-600">$300</div>
                      <div className="text-sm text-slate-500">/week</div>
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-6 px-6 font-medium text-slate-900">15 Members</td>
                    <td className="py-6 px-6 text-center">
                      <div className="text-2xl font-bold text-teal-600">$200</div>
                      <div className="text-sm text-slate-500">/week</div>
                    </td>
                    <td className="py-6 px-6 text-center">
                      <div className="text-2xl font-bold text-teal-600">$275</div>
                      <div className="text-sm text-slate-500">/week</div>
                    </td>
                    <td className="py-6 px-6 text-center">
                      <div className="text-2xl font-bold text-teal-600">$350</div>
                      <div className="text-sm text-slate-500">/week</div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-3xl font-bold text-slate-900 text-center mb-12">Additional Services</h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Moderation Services */}
            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300">
              <div className="flex items-center justify-center w-16 h-16 bg-orange-100 rounded-xl mb-6 mx-auto">
                <Shield className="w-8 h-8 text-orange-600" />
              </div>
              <h4 className="text-2xl font-bold text-slate-900 text-center mb-4">Moderation Services</h4>
              <p className="text-slate-600 text-center mb-6">Professional moderation with 1 dedicated moderator</p>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-slate-50 rounded-lg">
                  <span className="font-medium text-slate-900">8hrs/day</span>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-orange-600">$80</div>
                    <div className="text-sm text-slate-500">/week</div>
                  </div>
                </div>
                <div className="flex justify-between items-center p-4 bg-slate-50 rounded-lg">
                  <span className="font-medium text-slate-900">12hrs/day</span>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-orange-600">$120</div>
                    <div className="text-sm text-slate-500">/week</div>
                  </div>
                </div>
              </div>
              
              <button className="w-full mt-6 bg-orange-600 hover:bg-orange-700 text-white py-3 px-6 rounded-lg font-medium transition-colors duration-200">
                Select Plan
              </button>
            </div>

            {/* Community Management */}
            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300">
              <div className="flex items-center justify-center w-16 h-16 bg-purple-100 rounded-xl mb-6 mx-auto">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <h4 className="text-2xl font-bold text-slate-900 text-center mb-4">Community Management</h4>
              <p className="text-slate-600 text-center mb-6">Dedicated community manager for comprehensive oversight</p>
              
              <div className="text-center p-6 bg-slate-50 rounded-lg mb-6">
                <div className="text-4xl font-bold text-purple-600 mb-2">$200</div>
                <div className="text-slate-500">per week</div>
                <div className="text-sm text-slate-600 mt-2">1 Community Manager</div>
              </div>
              
              <ul className="space-y-3 mb-6">
                <li className="flex items-center text-slate-600">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  Full community oversight
                </li>
                <li className="flex items-center text-slate-600">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  Strategic planning
                </li>
                <li className="flex items-center text-slate-600">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  Growth optimization
                </li>
              </ul>
              
              <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 px-6 rounded-lg font-medium transition-colors duration-200">
                Select Plan
              </button>
            </div>

            {/* Press Release */}
            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300">
              <div className="flex items-center justify-center w-16 h-16 bg-indigo-100 rounded-xl mb-6 mx-auto">
                <FileText className="w-8 h-8 text-indigo-600" />
              </div>
              <h4 className="text-2xl font-bold text-slate-900 text-center mb-4">Press Release Packages</h4>
              <p className="text-slate-600 text-center mb-6">Custom pricing based on launch model and PinkSale integration</p>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-slate-600">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  Multiple distribution channels
                </li>
                <li className="flex items-center text-slate-600">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  PinkSale integration
                </li>
                <li className="flex items-center text-slate-600">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  Custom launch strategies
                </li>
              </ul>
              
              <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-6 rounded-lg font-medium transition-colors duration-200">
                Get Custom Quote
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-900">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-white mb-6">Ready to Elevate Your Community?</h3>
          <p className="text-xl text-slate-300 mb-8">
            Contact us today to discuss your needs and get a custom solution tailored to your project.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-medium transition-colors duration-200">
              <Phone className="w-5 h-5 mr-2" />
              Schedule a Call
            </button>
            <button className="inline-flex items-center justify-center bg-transparent border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg font-medium transition-colors duration-200">
              <Mail className="w-5 h-5 mr-2" />
              Send Message
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <span className="text-white font-semibold">Pinnacle Management Agency</span>
            </div>
            <p className="text-slate-400 text-center md:text-right">
              © 2025 Pinnacle Management. Professional community services.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;