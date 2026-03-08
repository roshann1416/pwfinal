/* ==================== 
   1. STATE VARIABLES 
   ==================== */
// These variables will store the user's selections
let selectedService = "Salon & Spa"; // Default service name
let selectedDate = null;
let selectedTime = null;

/* ==================== 
   2. CONFIGURATION 
   ==================== */
const START_HOUR = 9;  // 9 AM
const END_HOUR = 20;   // 8 PM (20:00 in 24-hour format)
const TIME_STEP = 1;   // Generate slots every 1 hour

/* ==================== 
   3. DOM ELEMENTS 
   ==================== */
// We select the container where time slots will be generated
const timeSlotsContainer = document.querySelector('.time-slots-grid');
const dateInput = document.getElementById('booking-date');
const form = document.querySelector('form');

/* ==================== 
   4. GENERATE TIME SLOTS 
   ==================== */
function generateTimeSlots() {
    // Clear any existing slots (in case we run this multiple times)
    timeSlotsContainer.innerHTML = '';

    // Loop from start hour to end hour
    for (let hour = START_HOUR; hour <= END_HOUR; hour++) {
        
        // Convert 24-hour format to 12-hour format with AM/PM
        const period = hour >= 12 ? 'PM' : 'AM';
        const displayHour = hour > 12 ? hour - 12 : hour;
        const timeString = `${displayHour}:00 ${period}`;

        // Create a label element for the slot
        const label = document.createElement('label');
        label.className = 'time-slot';
        
        // Create the radio input
        const input = document.createElement('input');
        input.type = 'radio';
        input.name = 'time';
        input.value = timeString;
        input.id = `slot-${hour}`;

        // Create the text span
        const span = document.createElement('span');
        span.textContent = timeString;

        // Assemble the elements
        label.appendChild(input);
        label.appendChild(span);
        timeSlotsContainer.appendChild(label);

        // Add click event listener to the label
        label.addEventListener('click', () => selectTimeSlot(input, timeString));
    }
}

/* ==================== 
   5. HANDLE SLOT SELECTION 
   ==================== */
function selectTimeSlot(radioInput, timeValue) {
    // 1. Update the state variable
    selectedTime = timeValue;

    // 2. Remove 'active' class from all slots
    const allSlots = document.querySelectorAll('.time-slot');
    allSlots.forEach(slot => slot.classList.remove('active'));

    // 3. Add 'active' class to the clicked slot
    // We find the parent label of the clicked radio button
    radioInput.parentElement.classList.add('active');

    // 4. Log to console for debugging
    console.log(`Time Selected: ${selectedTime}`);
}

/* ==================== 
   6. HANDLE DATE CHANGE 
   ==================== */
if (dateInput) {
    dateInput.addEventListener('change', (e) => {
        selectedDate = e.target.value;
        console.log(`Date Selected: ${selectedDate}`);
        
        // Optional: Reset time selection when date changes
        // const allInputs = document.querySelectorAll('input[name="time"]');
        // allInputs.forEach(input => input.checked = false);
        // document.querySelectorAll('.time-slot').forEach(slot => slot.classList.remove('active'));
        // selectedTime = null;
    });
}

/* ==================== 
   7. HANDLE FORM SUBMISSION 
   ==================== */
if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Stop page from reloading

        // Check if all required fields are filled
        if (!selectedDate || !selectedTime) {
            alert('Please select both a date and a time slot.');
            return;
        }

        // Gather form data (Name, Phone, Email)
        const name = document.getElementById('name').value;
        const phone = document.getElementById('phone').value;
        const email = document.getElementById('email').value;

        // Create a booking object
        const bookingData = {
            service: selectedService,
            date: selectedDate,
            time: selectedTime,
            customer: {
                name: name,
                phone: phone,
                email: email
            }
        };

        // Log the final data
        console.log('Booking Confirmed:', bookingData);
        
        // Show success message
        alert(`Booking Confirmed!\n\nService: ${bookingData.service}\nDate: ${bookingData.date}\nTime: ${bookingData.time}\n\nWe will contact you at ${bookingData.customer.phone}.`);
        
        // Reset form
        form.reset();
        selectedDate = null;
        selectedTime = null;
        document.querySelectorAll('.time-slot').forEach(slot => slot.classList.remove('active'));
    });
}

/* ==================== 
   8. INITIALIZE 
   ==================== */
// Run the slot generation when the page loads
document.addEventListener('DOMContentLoaded', () => {
    generateTimeSlots();
});
/* ==================== 
   1. STATE VARIABLES 
   ==================== */
let selectedService = "Salon & Spa";
let selectedDate = null;
let selectedTime = null;

/* ==================== 
   2. CONFIGURATION 
   ==================== */
const START_HOUR = 9;
const END_HOUR = 20;
const TIME_STEP = 1;

/* ==================== 
   3. DOM ELEMENTS 
   ==================== */
const timeSlotsContainer = document.getElementById('timeSlotsContainer');
const dateInput = document.getElementById('booking-date');
const form = document.getElementById('bookingForm');
const confirmationSection = document.getElementById('confirmationSection');
const bookingFormContainer = document.querySelector('.booking-form-container');

/* ==================== 
   4. GENERATE TIME SLOTS 
   ==================== */
function generateTimeSlots() {
    timeSlotsContainer.innerHTML = '';

    for (let hour = START_HOUR; hour <= END_HOUR; hour++) {
        const period = hour >= 12 ? 'PM' : 'AM';
        const displayHour = hour > 12 ? hour - 12 : hour;
        const timeString = `${displayHour}:00 ${period

                                                /* ==================== 
   1. STATE VARIABLES 
   ==================== */
let selectedService = "Salon & Spa";
let selectedDate = null;
let selectedTime = null;

/* ==================== 
   2. CONFIGURATION 
   ==================== */
const START_HOUR = 9;
const END_HOUR = 20;

/* ==================== 
   3. DOM ELEMENTS 
   ==================== */
const timeSlotsContainer = document.getElementById('timeSlotsContainer');
const dateInput = document.getElementById('booking-date');
const form = document.getElementById('bookingForm');
const confirmationSection = document.getElementById('confirmationSection');
const bookingFormContainer = document.querySelector('.booking-form-container');

// Dashboard Elements
const bookingsContainer = document.getElementById('bookings-container');
const totalBookingsEl = document.getElementById('total-bookings');
const upcomingBookingsEl = document.getElementById('upcoming-bookings');
const completedBookingsEl = document.getElementById('completed-bookings');

/* ==================== 
   4. GENERATE TIME SLOTS 
   ==================== */
function generateTimeSlots() {
    if (!timeSlotsContainer) return;
    timeSlotsContainer.innerHTML = '';

    for (let hour = START_HOUR; hour <= END_HOUR; hour++) {
        const period = hour >= 12 ? 'PM' : 'AM';
        const displayHour = hour > 12 ? hour - 12 : hour;
        const timeString = `${displayHour}:00 ${period}`;

        const label = document.createElement('label');
        label.className = 'time-slot';
        
        const input = document.createElement('input');
        input.type = 'radio';
        input.name = 'time';
        input.value = timeString;
        input.id = `slot-${hour}`;

        const span = document.createElement('span');
        span.textContent = timeString;

        label.appendChild(input);
        label.appendChild(span);
        timeSlotsContainer.appendChild(label);

        label.addEventListener('click', () => selectTimeSlot(input, timeString));
    }
}

/* ==================== 
   5. HANDLE SLOT SELECTION 
   ==================== */
function selectTimeSlot(radioInput, timeValue) {
    selectedTime = timeValue;
    const allSlots = document.querySelectorAll('.time-slot');
    allSlots.forEach(slot => slot.classList.remove('active'));
    radioInput.parentElement.classList.add('active');
    console.log(`Time Selected: ${selectedTime}`);
}

/* ==================== 
   6. HANDLE DATE CHANGE 
   ==================== */
if (dateInput) {
    dateInput.addEventListener('change', (e) => {
        selectedDate = e.target.value;
        console.log(`Date Selected: ${selectedDate}`);
    });
}

/* ==================== 
   7. LOCAL STORAGE FUNCTIONS 
   ==================== */
function getBookings() {
    const bookings = localStorage.getItem('availBookings');
    return bookings ? JSON.parse(bookings) : [];
}

function saveBooking(booking) {
    const bookings = getBookings();
    bookings.push(booking);
    localStorage.setItem('availBookings', JSON.stringify(bookings));
}

function deleteBooking(index) {
    const bookings = getBookings();
    bookings.splice(index, 1);
    localStorage.setItem('availBookings', JSON.stringify(bookings));
    renderDashboard(); // Refresh dashboard
}

/* ==================== 
   8. FORM SUBMISSION 
   ==================== */
if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        if (!selectedDate || !selectedTime) {
            alert('Please select both a date and a time slot.');
            return;
        }

        const name = document.getElementById('name').value;
        /* ==================== 
   1. STATE VARIABLES 
   ==================== */
let selectedService = "Salon & Spa";
let selectedDate = null;
let selectedTime = null;

/* ==================== 
   2. CONFIGURATION 
   ==================== */
const START_HOUR = 9;
const END_HOUR = 20;

/* ==================== 
   3. DOM ELEMENTS 
   ==================== */
const timeSlotsContainer = document.getElementById('timeSlotsContainer');
const dateInput = document.getElementById('booking-date');
const form = document.getElementById('bookingForm');
const confirmationSection = document.getElementById('confirmationSection');
const bookingFormContainer = document.querySelector('.booking-form-container');

// Dashboard Elements
const bookingsContainer = document.getElementById('bookings-container');
const totalBookingsEl = document.getElementById('total-bookings');
const upcomingBookingsEl = document.getElementById('upcoming-bookings');
const completedBookingsEl = document.getElementById('completed-bookings');

/* ==================== 
   4. GENERATE TIME SLOTS 
   ==================== */
function generateTimeSlots() {
    if (!timeSlotsContainer) return;
    timeSlotsContainer.innerHTML = '';

    for (let hour = START_HOUR; hour <= END_HOUR; hour++) {
        const period = hour >= 12 ? 'PM' : 'AM';
        const displayHour = hour > 12 ? hour - 12 : hour;
        const timeString = `${displayHour}:00 ${period}`;

        const label = document.createElement('label');
        label.className = 'time-slot';
        
        const input = document.createElement('input');
        input.type = 'radio';
        input.name = 'time';
        input.value = timeString;
        input.id = `slot-${hour}`;

        const span = document.createElement('span');
        span.textContent = timeString;

        label.appendChild(input);
        label.appendChild(span);
        timeSlotsContainer.appendChild(label);

        label.addEventListener('click', () => selectTimeSlot(input, timeString));
    }
}

/* ==================== 
   5. HANDLE SLOT SELECTION 
   ==================== */
function selectTimeSlot(radioInput, timeValue) {
    selectedTime = timeValue;
    const allSlots = document.querySelectorAll('.time-slot');
    allSlots.forEach(slot => slot.classList.remove('active'));
    radioInput.parentElement.classList.add('active');
    console.log(`Time Selected: ${selectedTime}`);
}

/* ==================== 
   6. HANDLE DATE CHANGE 
   ==================== */
if (dateInput) {
    dateInput.addEventListener('change', (e) => {
        selectedDate = e.target.value;
        console.log(`Date Selected: ${selectedDate}`);
    });
}

/* ==================== 
   7. LOCAL STORAGE FUNCTIONS 
   ==================== */
function getBookings() {
    const bookings = localStorage.getItem('availBookings');
    return bookings ? JSON.parse(bookings) : [];
}

function saveBooking(booking) {
    const bookings = getBookings();
    bookings.push(booking);
    localStorage.setItem('availBookings', JSON.stringify(bookings));
}

function deleteBooking(index) {
    const bookings = getBookings();
    bookings.splice(index, 1);
    localStorage.setItem('availBookings', JSON.stringify(bookings));
    renderDashboard(); // Refresh dashboard
}

/* ==================== 
   8. CHECK-IN FUNCTIONALITY 
   ==================== */
function checkInBooking(index) {
    const bookings = getBookings();
    
    // Check if booking exists
    if (bookings[index]) {
        // Update status to "Checked In"
        bookings[index].status = "Checked In";
        
        // Save back to localStorage
        localStorage.setItem('availBookings', JSON.stringify(bookings));
        
        // Re-render the dashboard to show the update
        renderDashboard();
        
        // Optional: Show a success message
        alert("You have successfully checked in!");
    }
}

/* ==================== 
   9. RENDER DASHBOARD 
   ==================== */
function renderDashboard() {
    const bookings = getBookings();
    
    // Update Stats
    totalBookingsEl.textContent = bookings.length;
    upcomingBookingsEl.textContent = bookings.filter(b => b.status === "Upcoming").length;
    completedBookingsEl.textContent = bookings.filter(b => b.status === "Checked In" || b.status === "Completed").length;

    // Clear current list
    bookingsContainer.innerHTML = '';

    if (bookings.length === 0) {
        bookingsContainer.innerHTML = `
            <div class="empty-state">
                <i class="fa-solid fa-calendar-xmark"></i>
                <h3>No Bookings Found</h3>
                <p>You haven't booked any services yet.</p>
                <a href="index.html#services" class="btn btn-primary">Book Now</a>
            </div>
        `;
        return;
    }

    // Generate Cards
    bookings.forEach((booking, index) => {
        const card = document.createElement('div');
        card.className = 'booking-card';
        
        // Determine status badge class
        let statusClass = 'status-upcoming';
        if (booking.status === 'Checked In') statusClass = 'status-completed';
        if (booking.status === 'Cancelled') statusClass = 'status-cancelled';

        card.innerHTML = `
            <div class="booking-header">
                <div>
                    <div class="booking-service">${booking.service}</div>
                    <span class="booking-date"><i class="fa-regular fa-calendar"></i> ${booking.date}</span>
                </div>
                <span class="status-badge ${statusClass}">${booking.status}</span>
            </div>
            
            <div class="booking-time">
                <i class="fa-regular fa-clock"></i>
                <span>${booking.time}</span>
            </div>

            <div class="booking-actions">
                ${booking.status !== 'Checked In' && booking.status !== 'Cancelled' 
                    ? `<button class="btn-checkin" onclick="checkInBooking(${index})">Check In</button>` 
                    : ''}
                <button class="btn-cancel" onclick="deleteBooking(${index})">Cancel</button>
            </div>
        `;
        
        bookingsContainer.appendChild(card);
    });
}

/* ==================== 
   10. FORM SUBMISSION 
   ==================== */
if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        if (!selectedDate || !selectedTime) {
            alert('Please select both a date and a time slot.');
            return;
        }

        const name = document.getElementById('name').value;
        const phone = document.getElementById('phone').value;
        const email = document.getElementById('email').value;

        const bookingData = {
            service: selectedService,
            date: selectedDate,
            time: selectedTime,
            customer: {
                name: name,
                phone: phone,
                email: email
            },
            status: "Upcoming" // Default status
        };

        saveBooking(bookingData);
        
        // Show Confirmation
        document.getElementById('conf-service').textContent = bookingData.service;
        document.getElementById('conf-date').textContent = bookingData.date;
        document.getElementById('conf-time').textContent = bookingData.time;
        document.getElementById('conf-name').textContent = bookingData.customer.name;

        bookingFormContainer.style.display = 'none';
        confirmationSection.classList.remove('hidden');
        
        // Reset form
        form.reset();
        selectedDate = null;
        selectedTime = null;
        document.querySelectorAll('.time-slot').forEach(slot => slot.classList.remove('active'));
    });
}

/* ==================== 
   11. VIEW SAVED BOOKINGS 
   ==================== */
function viewSavedBookings() {
    window.location.href = 'dashboard.html';
}

/* ==================== 
   12. INITIALIZE 
   ==================== */
document.addEventListener('DOMContentLoaded', () => {
    // Generate time slots on booking page
    generateTimeSlots();
    
    // Render dashboard on dashboard page
    if (bookingsContainer) {
        renderDashboard();
    }
});
        const phone = document.getElementById('phone').value;
        const email = document.getElementById('email').value;
