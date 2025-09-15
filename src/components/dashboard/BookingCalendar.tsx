import { useState, useEffect } from 'react';
import { Button } from '../Button';
import { getAppointments } from '../../lib/api';
import type { Appointment } from '../../types';

export function BookingCalendar() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadAppointments() {
      try {
        const providerId = localStorage.getItem('provider_id') || '1';
        const data = await getAppointments(providerId, selectedDate);
        setAppointments(data);
        setLoading(false);
      } catch {
        setError('Failed to load appointments');
        setLoading(false);
      }
    }

    loadAppointments();
  }, [selectedDate]);

  if (loading) {
    return <div className="text-center py-8">Loading...</div>;
  }

  if (error) {
    return <div className="text-center py-8 text-red-600">{error}</div>;
  }

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-brand-dark">Room & Appointment Calendar</h2>
          <Button>New Booking</Button>
        </div>

        <div className="grid grid-cols-7 gap-4 mb-4">
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
            <div key={day} className="text-center font-medium text-gray-600">
              {day}
            </div>
          ))}
        </div>

        <div className="border rounded-lg">
          <div className="grid grid-cols-7 gap-px bg-gray-200">
            {Array.from({ length: 35 }).map((_, i) => (
              <div
                key={i}
                className={`bg-white p-2 h-32 hover:bg-brand-light/50 cursor-pointer ${
                  i + 1 === selectedDate.getDate() ? 'bg-brand-primary/10 border border-brand-primary' : ''
                }`}
                onClick={() => setSelectedDate(new Date(2025, 2, i + 1))}
              >
                <span className="text-sm text-gray-600">{i + 1}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-semibold mb-4 text-brand-dark">
          Appointments for {selectedDate.toLocaleDateString()}
        </h3>
        <div className="space-y-4">
          {appointments.length === 0 ? (
            <p className="text-center text-gray-500">No appointments scheduled</p>
          ) : (
            appointments.map((appointment) => (
              <div key={appointment.id} className="flex items-center justify-between p-4 bg-brand-light/30 rounded-lg">
                <div>
                  <p className="font-medium text-brand-dark">{appointment.patient.name}</p>
                  <p className="text-sm text-gray-600">
                    {appointment.notes || 'No notes'} - Room {appointment.room.number}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-600">
                    {new Date(appointment.date).toLocaleTimeString()} - 
                    {new Date(new Date(appointment.date).getTime() + appointment.duration * 60000).toLocaleTimeString()}
                  </p>
                  <Button variant="secondary" className="mt-2">
                    Manage
                  </Button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}