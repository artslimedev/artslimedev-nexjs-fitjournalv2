import React from "react";

export const metadata = {
  title: 'Settings - FitJournal',
  description: 'Manage your account settings',
};

export default function SettingsPage() {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h1 className="text-2xl font-bold mb-4">Account Settings</h1>
      <div className="space-y-4">
        <div>
          <h2 className="text-lg font-semibold">Profile Information</h2>
          <p className="text-gray-600">Manage your profile information and preferences</p>
        </div>
        
        <div>
          <h2 className="text-lg font-semibold">Privacy Settings</h2>
          <p className="text-gray-600">Control your privacy settings and data sharing preferences</p>
        </div>
        
        <div>
          <h2 className="text-lg font-semibold">Notification Preferences</h2>
          <p className="text-gray-600">Manage how and when you receive notifications</p>
        </div>
      </div>
    </div>
  );
}

