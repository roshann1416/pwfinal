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
