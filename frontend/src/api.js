const BASE_URL = "https://sportomic-tau.vercel.app/api";

export const fetchVenues = async () => {
  const res = await fetch(`${BASE_URL}/venues`);
  return res.json();
};

export const fetchMembers = async () => {
  const res = await fetch(`${BASE_URL}/members`);
  return res.json();
};

export const fetchBookings = async () => {
  const res = await fetch(`${BASE_URL}/bookings`);
  return res.json();
};

export const fetchTransactions = async () => {
  const res = await fetch(`${BASE_URL}/transactions`);
  return res.json();
};
