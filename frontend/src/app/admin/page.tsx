"use client";

import React from 'react';
import { FiUsers, FiFileText, FiImage, FiTrendingUp } from 'react-icons/fi';

export default function AdminDashboard() {
  const stats = [
    { name: 'Total Visits', value: '2,405', icon: <FiTrendingUp className="text-green-500" size={24} />, change: '+12% this week' },
    { name: 'Gallery Images', value: '48', icon: <FiImage className="text-blue-500" size={24} />, change: '+3 this week' },
    { name: 'Documents', value: '12', icon: <FiFileText className="text-purple-500" size={24} />, change: 'Up to date' },
    { name: 'Messages', value: '7', icon: <FiUsers className="text-orange-500" size={24} />, change: '2 unread' },
  ];

  const recentMessages = [
    { id: 1, name: 'Rahul Desai', email: 'rahul@investcorp.com', subject: 'Investment Query - Phase 1', date: '2 hours ago', status: 'Unread' },
    { id: 2, name: 'Anita Sharma', email: 'anita.s@tourismdept.gov.in', subject: 'Clearance Documents', date: '1 day ago', status: 'Replied' },
    { id: 3, name: 'Vikram Joshi', email: 'v.joshi@ecoarchitects.in', subject: 'Machan Designs', date: '2 days ago', status: 'Read' },
  ];

  return (
    <div className="space-y-6">
      
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col">
            <div className="flex justify-between items-start mb-4">
              <div className="p-3 bg-gray-50 rounded-lg">
                {stat.icon}
              </div>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-gray-800 mb-1">{stat.value}</h3>
              <p className="text-gray-500 text-sm font-medium">{stat.name}</p>
            </div>
            <div className="mt-4 pt-4 border-t border-gray-100 text-xs text-gray-500 font-medium">
              {stat.change}
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Messages */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 lg:col-span-2">
          <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center">
            <h3 className="font-bold text-gray-800">Recent Messages</h3>
            <button className="text-sm text-forest font-medium hover:underline">View All</button>
          </div>
          <div className="divide-y divide-gray-100">
            {recentMessages.map(msg => (
              <div key={msg.id} className="p-6 hover:bg-gray-50 transition-colors cursor-pointer">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-bold text-gray-800">{msg.name}</h4>
                  <span className="text-xs text-gray-500">{msg.date}</span>
                </div>
                <p className="text-sm text-gray-600 font-medium mb-1">{msg.subject}</p>
                <div className="flex justify-between items-center mt-3">
                  <span className="text-xs text-gray-500">{msg.email}</span>
                  <span className={`px-2 py-1 rounded text-xs font-bold ${
                    msg.status === 'Unread' ? 'bg-orange-100 text-orange-700' :
                    msg.status === 'Replied' ? 'bg-green-100 text-green-700' :
                    'bg-gray-100 text-gray-700'
                  }`}>
                    {msg.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* System Status */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100">
          <div className="px-6 py-4 border-b border-gray-100">
            <h3 className="font-bold text-gray-800">System Status</h3>
          </div>
          <div className="p-6 space-y-6">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-600">Storage Used</span>
                <span className="font-medium text-gray-800">45%</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2">
                <div className="bg-forest h-2 rounded-full" style={{ width: '45%' }}></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-600">Database Capacity</span>
                <span className="font-medium text-gray-800">12%</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2">
                <div className="bg-blue-500 h-2 rounded-full" style={{ width: '12%' }}></div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-gray-100">
              <h4 className="font-bold text-gray-800 mb-3 text-sm">Active Integrations</h4>
              <ul className="space-y-3">
                <li className="flex items-center text-sm">
                  <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                  MongoDB Atlas
                </li>
                <li className="flex items-center text-sm">
                  <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                  Cloudinary Media
                </li>
                <li className="flex items-center text-sm">
                  <div className="w-2 h-2 rounded-full bg-gray-400 mr-2"></div>
                  SMTP Mailer (Pending)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
