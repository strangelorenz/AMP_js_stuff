/*
 * Use the code on this page as a template for your own experiment
*/

// Settings you can vary
var FixTime = 500 // Inter Trial Interval
var ITI = 2000 // Inter Trial Interval
var PrimeTime = 75 
var number_of_trials = 20
var data_address = '../save_data.php' // Page to send results to.

var logging_box_ids = new Array('paradigmBox', 'timeBox', 'trialBox', 'stimuliBox', 'primeBox', 'probeBox', 'codeBox', 'responseBox', 'rtBox', 'SubjectBox');

var variables_to_log = new Array('paradigm', 'time', 'trial_number', 'stimuli_number', 'prime', 'probe', 'code', 'response', 'rt', 'subject'); 

var debug_mode = true // Set as true to show extra information, false to run experiment normally.
var error_feedback = false

// Variables to log
var paradigm = 'NameOfExperiment';
var experiment_start_time = Date();
var subject_nr = Math.floor(Math.random() * 99999999) + 1; // Pick a random number between 1 and 99999999
var trial_number = 0;
var stimuli_number
var probe
var prime
var code
var response
var rt
var time = 0;

var subject = GetUrlValue('subject')

// Do not change
var random_order = generate_random_list(number_of_trials);
var stim_number = random_order[trial_number];

// Experiment logic - Adjust this as needed
if(debug_mode){
    document.getElementById('hidden_div').style.display = 'Inline'
};

function trial_stage0() {
    stimuli_number = random_order[trial_number];
    probe = probes[stimuli_number];
    code = codes[stimuli_number];
    prime = primes[stimuli_number];
    show_fixation(ITI);
    setTimeout("trial_stage1()", FixTime);
};

function trial_stage1() {
    prime = primes[stimuli_number];
	showPrimeImage(prime);
    setTimeout("trial_stage2()", PrimeTime);
};

function trial_stage2() {
    start_time = (Date.now());
    showTargetImage(probe);
    get_keyboard_response('PIEQ');
    GetUrlValue;
};
