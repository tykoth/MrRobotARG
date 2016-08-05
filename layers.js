var row_number = 1;

function dark_clouds_drift_away_to_reveal() {
	$(".r"+row_number+" .bg").animate({ opacity: 1 }, 50);
	row_number++;

	if (row_number < 40) {
		setTimeout(dark_clouds_drift_away_to_reveal, 50);	
	} else {
		$(".l, .o, .s").animate({ opacity: 1 }, 1500);
		$(".bg").animate({ opacity: 0 }, 1500);
	}
}
dark_clouds_drift_away_to_reveal();
