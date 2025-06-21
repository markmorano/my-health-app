
// Const Keys for HTML

const featureInterface = document.getElementById('feature-interface');
const featureCards = document.querySelectorAll('.feature-card');


const askAiHTML = `
    <section class="ask-ai" id="ask-ai">
            <button></button>
            <h2>Ask Health AI</h2>
            <p>Have a question about your health? Our AI assistant is here to help. Just type your concern and get quick, personalized guidance.</p>

            <!-- Flex Container -->
            <div class="input-wrapper">
                <!-- Left Side -->
                <fieldset class="needs-fieldset">
                    <legend>Select what you need:</legend>

                        <div class="input-row">
                            <div class="checkbox-group">
                                <label><input type="checkbox" name="need" value="provide medicine needs">Medicine</label>
                                <label><input type="checkbox" name="need" value="first-aid">First Aid</label>
                                <label><input type="checkbox" name="need" value="food">Food Requirement</label>
                            </div>

                            <div class="country-group">
                                <label for="country-select">Select Country:</label>
                                <select name="country" id="country-select">
                                    <option value="ph" data-flag="https://flagcdn.com/w40/ph.png">PHI</option>
                                    <option value="us" data-flag="https://flagcdn.com/w40/us.png">US</option>
                                    <option value="uk" data-flag="https://flagcdn.com/w40/gb.png">UK</option>
                                    <option value="ca" data-flag="https://flagcdn.com/w40/ca.png">CAN</option>
                                    <option value="au" data-flag="https://flagcdn.com/w40/au.png">AUS</option>
                                </select>
                            </div>
                        </div>
                </fieldset>

            <!-- Right Side -->
                <div class="question-box">
                    <form class="ask-ai-form" onsubmit="AskAI(event)">
                    
                        <div class="question-fieldset">
                            <label for="user-question" class="floating-label">Your Question:</label>
                
                            <textarea name="user-question" id="user-question" placeholder="Ask me..."></textarea>
                        </div>
                        <button type="submit">Ask AI</button>
                    </form>
                </div>
            </div>

            <!--AI Response-->
            <div class="ai-response" id="ai-response"></div>
            <div class="loading-spinner" id="loading-spinner" style="display: none;;"></div>
            
    </section>`;

const bmiCalculatorHTML = `
    <section id="bmi-calculator" class="tool-card">
        <h2>BMI & Wellness Calculator</h2>
        <p>Enter your height and weight to calculate your Body Mass Index (BMI)</p>

        <div class="bmi-flex-wrapper">
            <!-- Left Side Form-->
            <div class="bmi-form-wrapper">
                <form id="bmi-form" class="bmi-form">
                    <div class="form-row">
                        <label for="height">Height (cm):</label>
                        <input type="number" id="height" placeholder="e.g 170" required>
                    </div>

                    <div class="form-row">
                        <label for="weight">Weight (kg):</label>
                        <input type="number" id="weight" placeholder="e.g 65" required>
                    </div>

                    <button type="submit">Calculate BMI</button>
                </form>
                <!-- BMI Result -->
                <div id="bmi-result" class="bmi-result"></div>
                <!-- AI Suggestion button -->
                <button id="ai-suggestion-btn" class="ai-button hidden">Get AI Suggestion</button>
            </div>
            
            <!-- Right Side -->
            <!-- AI Response -->
            <div id="bmi-ai-response" class="bmi-ai-response ">
                <div class="ai-box-content" id="ai-box-content"></div>
            </div>
        </div>
    </section>`;

const nutriionPlansHTML = `
    <section id="nutrition-plans" class="tool-card">
        <h2>Personalized Nutrition Plans</h2>
        <p>Get customized meal suggestions based on your profile and goals.</p>

        <div class="nutrition-layout">
            <form id="nutrition-form" class="nutrition-form">
                <div class="form-grid">
                    <div class="form-row">
                        <label for="age">Age:</label>
                        <input type="number" id="age" placeholder="e.g. 30" required>
                    </div>

                    <div class="form-row">
                        <label for="height-nutrition">Height (cm):</label>
                        <input type="number" id="height-nutrition" placeholder="e.g 170">
                    </div>

                    <div class="form-row">
                        <label for="weight-nutrition">Current Weight (kg)</label>
                        <input type="number" id="weight-nutrition" placeholder="e.g 65" required>
                    </div>

                    <div class="form-row">
                        <label for="ideal-weight">Ideal Weight Goal(kg)</label>
                        <input type="number" id="ideal-weight" placeholder="e.g 65" required>
                    </div>

                    <div class="form-row">
                        <label for="goal">Goal:</label>
                        <select id="goal" required>
                            <option value="lose">Weight loss</option>
                            <option value="maintain">Maintain Weight</option>
                            <option value="gain">Weight Gain</option>
                        </select>
                    </div>

                    <div class="form-row">
                        <label for="meals-per-day">Number of Meals Per Day:</label>
                        <input type="number" id="meals-per-day" placeholder="e.g 2000">
                    </div>
                </div>

                <button type="submit">Submit Plan</button>
                <button type="button" id="clear-nutrition">Remove Plan</button>
                <button id="generate-meal" type ="button">Generate Meal Plan</button>
            </form>
            
            <div id="meal-plan-response" class="meal-plan-output">
                <!-- Will Generate meal plan AI -->
            </div>
        </div>

        <div class="nutrition-result" id="nutrition-result">
                <!-- Generate plan will go here -->
        </div>

    </section>`;

const medicationReminderHTML = `
    <section id="medication-calendar-section" class="tool-card">
        <div class="medication-section" >
            <h2>🩺 Medication Reminder</h2>

            <div class="medication-content">
                <form id="medicationForm">
                    <label for="reminderStartDate">Start Date:</label>
                    <input type="date" id="reminderStartDate" required/>

                    <label for="reminderEndDate">End Date:</label>
                    <input type="date" id="reminderEndDate" required/>

                    <label for="reminderTime">Time:</label>
                    <input type="time" id="reminderTime" required/>

                    <label for="reminderNote">Note:</label>
                    <textarea placeholder="🪰Take aspirin..." id="reminderNote" required></textarea>

                    <button type="submit">➕ Add Reminder</button>
                    <button id="clearReminder">Clear Reminders</button>
                </form>

                <div id="reminderDetails" class="reminderDetails">
                    <!-- Reminder Lists Here -->

                </div>   
            </div>

        </div>

        <!-- Calendar -->
        <div class="calendar-wrapper">
            <h2>🗓️ Calendar Tracker</h2>
            <label for="monthSelect">Month:</label>
            <select id="monthSelect"></select>
            <div id="calendar" class="calendar"></div>
        </div>
    </section> `;




// Define other interfaces similaryly for medication,calendar etc.

featureCards.forEach(card => {
    card.addEventListener('click', () => {
        const feature = card.getAttribute('data-feature');

        // Show feature interface container when feature selected
        if (featureInterface.classList.contains('hidden')) {
            featureInterface.classList.remove('hidden');
        }

        switch (feature) {
            case 'ask_ai':
                featureInterface.innerHTML = askAiHTML;

                // Wait for DOM update before trying to scroll
                setTimeout(() => {
                    const askAiSection = document.getElementById('ask-ai');
                    if (askAiSection) {
                        askAiSection.scrollIntoView({ behavior: 'smooth' });
                    } else {
                        console.error("Ask AI section not found.");
                    }
                }, 0);
                break;

            case 'bmi':
                featureInterface.innerHTML = bmiCalculatorHTML;
                attachBMIFormHandler();
                // Smooth scroll with delay to ensure DOM is rendered
                setTimeout(() => {
                    const bmiCalcSection = document.getElementById('bmi-calculator');
                    if (bmiCalcSection) bmiCalcSection.scrollIntoView({ behavior: 'smooth' });
                }, 0);
                break;

            case 'medication': // Medication from HTML
                featureInterface.innerHTML = medicationReminderHTML;
                attachMedicationFormHandler();
                
                requestAnimationFrame(() => {
                    // Scroll smoothly to medication
                    const section = document.getElementById('medication-calendar-section');
                    if (section) section.scrollIntoView({behavior: 'smooth'});

                    currentMonth = parseInt(document.getElementById("monthSelect").value);
                    generateCalendar();
                });
                break;

            case 'nutrition': // Nutrition Plans from HTML
                featureInterface.innerHTML = nutritionPlansHTML;
                attachNutritionFormHandler();
                // Scroll smoothly to nutrition plans
                document.getElementById('nutrition-plans').scrollIntoView({ behavior: 'smooth'});
                break;
            
            //add more cases

            default:
                featureInterface.innerHTML = '';

                // Hide interface container if no efature selected
                featureInterface.classList.add('hidden');
        }
    });
});

// Format Text for clean look
function formatAIOutput(rawText, options = {}) {
    const {
        sectionPattern = /(Month \d:|Important Reminders|Estimated Weight Loss)/gi,
        sectionLabels = [],
        useEmojis = false,
        highlightShortLines = true
    } = options;

    // Clean and normalize the input text
    let cleanText = rawText
        .replace(/---+/g, '')                         // Remove lines of dashes
        .replace(/#+/g, '')                           // Remove markdown headings (#)
        .replace(/\*\s/g, '• ')                       // Normalize bullet points
        .replace(/^\s*Month \d:\s*$/gmi, '')          // Remove standalone "Month X:" lines
        .replace(/^Month \d:\s*\n(?=Month \d: )/gmi, '') // Remove "Month X:" if followed by same line
        .replace(/\n{2,}/g, '\n')                     // Collapse multiple blank lines to single
        .trim();


    const sections = cleanText.split(new RegExp(`(?=${sectionPattern.source})`, 'gi'));
    let intro = sections[0]?.trim() || '';

    // Simplify intro: preserve exact AI start if present, else clean long phrases
    if (!intro.startsWith("Here's the 3-month plan for healthier living")) {
        intro = intro
            .replace(/^(Here is|Welcome to|Your plan is|This is|Let's start with|Based on your results)[^\.]*\.?/i, '')
            .split(/[\.\n]/)[0]  // keep only first sentence or first line
            .trim();
    }

    if (!intro) intro = 'Your personalized plan:';

    const isBullet = line => /^[-•]\s/.test(line);

    const formattedSections = sections.slice(1).map((text, i) => {
        let lines = text.split('\n').map(l => l.trim()).filter(Boolean);
        const isWorkoutSection = /workout/i.test(lines[0] || '');
        let html = [];

        if (sectionLabels[i]) {
            const labelText = useEmojis ? `${sectionLabels[i]}` : sectionLabels[i].replace(/^[^a-zA-Z0-9]+/, '');
            html.push(`<h4 class="section-heading">${labelText}</h4>`);
        }

        let inList = false;

        for (let line of lines) {
            if (isBullet(line)) {
                if (isWorkoutSection) {
                    let workoutName = line.replace(/^[-•]\s*/, '').split(/[,–:-]/)[0].trim();
                    if (!inList) {
                        html.push('<ul style="margin:0; padding-left:1.2rem; line-height:1;">');
                        inList = true;
                    }
                    html.push(`<li>${workoutName}</li>`);
                } else {
                    if (!inList) {
                        html.push('<ul style="margin:0; padding-left:1.2rem; line-height:1.1;">');
                        inList = true;
                    }
                    html.push(`<li>${line.replace(/^[-•]\s*/, '')}</li>`);
                }
            } else {
                if (inList) {
                    html.push('</ul>');
                    inList = false;
                }
                if (highlightShortLines && line.length < 100) {
                    html.push(`<p class="highlight" style="margin:0.3rem 0; line-height:1.3;">${line}</p>`);
                } else {
                    html.push(`<p style="margin:0.4rem 0; line-height:1.4;">${line}</p>`);
                }
            }
        }

        if (inList) html.push('</ul>');

        return html.join('\n');
    });

    return `
        <div class="ai-intro" style="font-weight:600; font-size:1rem; margin-bottom:0.7rem; color: var(--text-color); line-height:1.3;">
            ${intro}
        </div>
        <div class="ai-body" style="display:flex; flex-direction:column; gap:0.8rem;">
            ${formattedSections.join('\n')}
        </div>
    `.trim();
}

// Ask AI
function AskAI(event) {
    event.preventDefault();

    const question = document.getElementById("user-question").value;
    const responsiveDiv = document.getElementById("ai-response");
    const spinner = document.getElementById("loading-spinner")

    // Spinner
    if (!responsiveDiv || !spinner) {
        console.error("Required element not found.");
        return;
    } 

    responsiveDiv.style.display = "none"; // Hide Previous response
    spinner.style.display = "block";

    // Get all selected checkbox values

    const selectedNeeds = Array.from(document.querySelectorAll('input[name="need"]:checked')).map(cb => cb.value);

    if(!responsiveDiv) {
        console.error("Element with ID 'ai-response' not found. ");
        return;
    }

    // Get selected country

    const selectCountry = document.getElementById("country-select").value;
    

    responsiveDiv.innerText = "Thinking...";

    fetch("http://127.0.0.1:5000/ask_ai", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ 
            question: question,
            needs: selectedNeeds,
            country: selectCountry
         })
    })
    .then(response => {
        if(!response.ok) {
            throw new Error("Server error");
            
        }
        return response.json();
    })
    .then(data => {
        spinner.style.display = "none"; // Hide spinner
        const markdown = data.response || "No answer received.";
        const htmlResponse = marked.parse(markdown);

        // HTML content
        responsiveDiv.innerHTML = htmlResponse;
        responsiveDiv.style.display = "block";
    })
    .catch(error => {
        console.error("Error", error);
        spinner.style.display = "none";
        console.error("Error", error);
        responsiveDiv.innerText = "Failed to contact AI server";
    });
};

// Flags
$(document).ready(function () {
    function formatCountry(option) {
        if (!option.id) return option.text;
        const flagURL = $(option.element).data('flag');
        if (flagURL) {
            return $(`<span><img src="${flagURL}" class="img-flag" /> ${option.text}</span>`);
        }
        return option.text
    }

    $('#country-select').select2({
        templateResult: formatCountry,
        templateSelection: formatCountry,
        minimumResultsForSearch: Infinity
    });
});


// BMI Calculator
function attachBMIFormHandler() {
    const bmiForm = document.getElementById('bmi-form');
    const aiBtn = document.getElementById('ai-suggestion-btn');
    const aiBox = document.getElementById('ai-box-content');
    const bmiResult = document.getElementById('bmi-result');
    //const aiResponseContainer = document.getElementById('bmi-ai-response');  // <-- reference to AI response div

    if (!bmiForm) return;

    let currentBMI = null;
    let currentStatus = null;

    bmiForm.addEventListener('submit', (e) => {
    e.preventDefault();

        const heightCm = parseFloat(document.getElementById('height').value);
        const weightKg = parseFloat(document.getElementById('weight').value);

        if (!heightCm || !weightKg || heightCm <= 0 || weightKg <= 0) {
            bmiResult.textContent = 'Please enter valid height and weight.';
            aiBtn.classList.add('hidden');
            //aiResponseContainer.classList.add('hidden');
            return;
        }

        const height = heightCm / 100;
        const bmi = (weightKg / (height * height)).toFixed(2);

        let status = '';

        if (bmi < 18.5) status = 'Underweight';
        else if (bmi < 24.9) status = 'Normal';
        else if (bmi < 29.9) status = 'Overweight';
        else status = 'Obese';

        bmiResult.textContent = `Your BMI is ${bmi} (${status})`;

        // Store current values
        currentBMI = bmi;
        currentStatus = status;

        // Show AI Suggestion button only if chose

        if (status === 'Obese') {
            aiBtn.classList.remove('hidden');
        } else {
            aiBtn.classList.add('hidden');
            aiBox.textContent = ''; // Clear AI Box
            //aiResponseContainer.classList.add('hidden')
        }
    });

    aiBtn.addEventListener('click', () => {
        if(!currentBMI && !currentStatus) return;

        aiBox.textContent = 'Loading AI Suggestions...';

        //aiResponseContainer.classList.add('visible');

        // Example POST request for Python backend API

        fetch('http://127.0.0.1:5000/bmi_ai_suggestion', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                bmi: currentBMI,
                status: currentStatus
            })
        })
        .then(response => response.json())
        .then(data => {
            // Assume data contains a 'suggestion' propertyy with AI tips
            aiBox.innerHTML = formatAIOutput(data.suggestion) || 'No suggestion available.';  
        })
        .catch(err => {
            aiBox.textContent = 'Failed to load AI suegstions, Please try again later.';
            console.error(err);
        });
    });
};

// Nutrition Form Reminder
function attachNutritionFormHandler() {
    const form = document.getElementById("nutrition-form");
    const resultDiv = document.getElementById("nutrition-result");
    const mealPlanDiv = document.getElementById("meal-plan-response");
    const generateButton = document.getElementById("generate-meal");

    // Load last saved plan (if any)
    const savedPlan = JSON.parse(localStorage.getItem("nutrition-plan"));

    if (savedPlan) {
        displayPlan(savedPlan, resultDiv);
    }

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const plan = {
            age: document.getElementById("age").value,
            height: document.getElementById("height-nutrition").value,
            weight: document.getElementById("weight-nutrition").value,
            idealWeight: document.getElementById("ideal-weight").value,
            diet: document.getElementById("diet").value,
            mealsPerDay: document.getElementById("meals-per-day").value
        };

        localStorage.setItem("nutrition-plan", JSON.stringify(plan));
        displayPlan(plan, resultDiv);
    });

    // Clear Button
    const clearButton = document.getElementById("clear-nutrition");
    if(clearButton) {
        clearButton.addEventListener("click", () => {
            if(confirm("Are you sure you want to clear saved nutrition plan?")) {
                localStorage.removeItem("nutrition-plan");
                resultDiv.innerHTML = "<p>No plan saved</p>";
                mealPlanDiv.innerHTML = "";
                form.reset();
            }
        });
    }

    // Handle Generate Meal Plan API request
    if (generateButton) {
        generateButton.addEventListener("click", () => {
            const plan = JSON.parse(localStorage.getItem("nutrition-plan"));
            if (!plan) {
                alert("Please submit a nutrition plan first.");
                return;
            }

            mealPlanDiv.innerHTML = "<p>Generating meal plan...</p>";

            fetch("http://127.0.0.1:5000/generate_meal_plan", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(plan)
            })
            .then(response => {
                if(!response.ok) throw new Error("Failed to fetch meal plan");
                return response.json();
            })
            .then(data => {
                const mealText = data.meal_plan;
                if(!mealText || mealText.length === 0) {
                    mealPlanDiv.innerHTML = "<p>No meal plan received.</p>";
                    return;

                }

                let formatted = mealText
                    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>") // Bold **text**
                    .replace(/\* (.*?)\n/g, "<li>$1</li>")            // Convert * lines to list items
                    .replace(/---+/g, "<hr>")                         // Replace markdown dividers with <hr>
                    .replace(/\n{2,}/g, "</ul><ul>")                  // Separate blocks
                    .replace(/\n/g, "<br>");                          // Regular line breaks

                // Wrap on <ul> if needed
                formatted = `<ul>${formatted}</ul>`;

                mealPlanDiv.innerHTML = formatted;
                
            })
            .catch(error => {
                console.error("Meal plan error:", error);
                mealPlanDiv.innerHTML = "<p>Failed to generate meal plan</p>";
            });
        });
    }

    function displayPlan(plan, container) {
        container.innerHTML = `
            <h3>Your Nutrition Plan</h3>
            <ul>
                <li><strong>Age:</strong> ${plan.age} years old</li>
                <li><strong>Height:</strong> ${plan.height} cm</li>
                <li><strong>Weight:</strong> ${plan.weight} kg</li>
                <li><strong>Ideal Weight:</strong> ${plan.idealWeight} kg</li>
                <li><strong>Goal:</strong> ${plan.diet}</li>
                <li><strong>Meals/Day:</strong> ${plan.mealsPerDay}</li>
            </ul>`;
    }
}

// Medication Reminder;Local Storage for Java Script; no log in required
    // Once we have the log in; we can change this to python

function attachMedicationFormHandler() {
    const calendar = document.getElementById("calendar");
    const reminderDetails = document.getElementById("reminderDetails");
    const clearBtn = document.getElementById("clearReminder");
    const monthSelect = document.getElementById("monthSelect");
    const startInput = document.getElementById("reminderStartDate");
    const endInput = document.getElementById("reminderEndDate");

    const months = ["January", "February", "March", "April",
                    "May", "June", "July", "August",
                    "September", "October", "November", "December"]

    let currentYear = new Date().getFullYear();
    let currentMonth = new Date().getMonth();

    months.forEach((month, idx) => {
        const option = document.createElement("option");
        option.value = idx;
        option.text = month;

        if (idx === currentMonth) option.selected = true;
        monthSelect.appendChild(option);
    });

    monthSelect.addEventListener("change", () => {
        currentMonth = parseInt(monthSelect.value);
        generateCalendar();
    });

    startInput.addEventListener("change", () => {
        endInput.min = startInput.value;
    });

    function saveReminder(start, end, time, note) {
        const reminders = JSON.parse(localStorage.getItem("calendarReminders")) || {};
        let date = new Date(start);
        const endDate = new Date(end);

        while (date <= endDate) {
            const key = date.toISOString().split("T")[0];

            if (!reminders[key]) reminders[key] = [];
            reminders[key].push({ time, note });
            date.setDate(date.getDate() + 1);
        }
        localStorage.setItem("calendarReminders", JSON.stringify(reminders));
    }

    function generateCalendar() {
        calendar.innerHTML = "";
        const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

        for (let day = 1; day <= daysInMonth; day++) {
            const dateStr = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
            const dayEl = document.createElement("div");
            dayEl.className = "calendar-day";
            dayEl.dataset.date = dateStr;
            dayEl.textContent = day;
            dayEl.onclick = () => showReminder(dateStr);
            calendar.appendChild(dayEl);
        }
        markCalendarDays();
    }

    window.generateCalendar = generateCalendar;
    window.currentMonth = currentMonth;


    function markCalendarDays() {
        const reminders = JSON.parse(localStorage.getItem("calendarReminders")) || {};
        Object.keys(reminders).forEach(date => {
            const cell = document.querySelector(`[data-date='${date}']`);
            if (cell) cell.classList.add("has-reminder");
        });
    }

    function showReminder(date) {
        const reminders = JSON.parse(localStorage.getItem("calendarReminders")) || {};

        if (reminders[date]) {
            reminderDetails.innerHTML = reminders[date].map((r, i) => 
            `<div class="reminder-entry">
                <span class="note">${r.note}</span>
                <span class="time">⏰ ${r.time}</span>
                <button class="delete-btn" onclick="deleteReminder('${date}',${i})">Remove</button>
            </div>`).join("");
            clearBtn.style.display = "block";
            clearBtn.onclick = () => {
                delete reminders[date];
                localStorage.setItem("calendarReminders", JSON.stringify(reminders));
                reminderDetails.innerHTML = "";
                clearBtn.style.display = "none";
                generateCalendar();
            };
        } else {
            reminderDetails.innerHTML = "<p>💭 No reminders</p>";
            clearBtn.style.display = "none";
        }
    }

    function deleteReminder(date, index) {
        const reminders = JSON.parse(localStorage.getItem("calendarReminders")) || {};

        if (reminders[date]) {
            reminders[date].splice(index, 1);
            if (reminders[date].length === 0) delete reminders[date];
            localStorage.setItem("calendarReminders", JSON.stringify(reminders));
            showReminder(date);
            generateCalendar();
        }
    }
    window.deleteReminder = deleteReminder;

    document.getElementById("medicationForm").addEventListener("submit", e => {
        e.preventDefault();
        const start = startInput.value;
        const end = endInput.value;
        const time = document.getElementById("reminderTime").value;
        const note = document.getElementById("reminderNote").value;
        saveReminder(start,end, time, note )
        e.target.reset();
        generateCalendar();
    });
        
    window.addEventListener("DOMContentLoaded", () => {
    currentMonth = parseInt(monthSelect.value); // ensures correct sync
    window.currentMonth = currentMonth;
    generateCalendar();
    });

};

