/* modal-data.js
	Set the data for the modal
*/

function setModalData(project_id) {

	var test_obj = [
		{
			title : 'About Me',
			img_src : 'images/proj0-full.jpg',
			img_alt_text : 'Screenshot of Project 0',
			subtitle : 'Front-End Web Developer Nanodegree — Project 0:',
			description : 'You will get acquainted with your text editor, creating and editing simple HTML and CSS files to create your very first webpage!',
			github_link : 'https://github.com/jscott10/UdacityProject0'
		},
		{
			title : 'Build a Portfolio Site',
			img_src : 'images/proj1-full.jpg',
			img_alt_text : 'Screenshot of Project 1',
			subtitle : 'Front-End Web Developer Nanodegree — Project 1:',
			description : 'You will develop a responsive website that will display images, descriptions and links to each of the portfolio projects you will complete throughout the course of the Front-End Web Developer Nanodegree.',
			github_link : 'https://github.com/jscott10/UdacityProject1'
		},
		{
			title : 'Online Résumé',
			img_src : 'images/proj2-full.jpg',
			img_alt_text : 'Screenshot of Project 2',
			subtitle : 'Front-End Web Developer Nanodegree — Project 2:',
			description : 'You\'ll demonstrate your mastery of the language\'s syntax through a series of challenges. Each multipart problem mimics a real-life challenge that front-end developers face.',
			github_link : '#'
		}
	];

	$('.modal-title', $('#myModal')).replaceWith('<span class="modal-title">' + test_obj[project_id].title + '</span>');
	$('.project-image', $('#myModal')).attr("src", test_obj[project_id].img_src);
	$('.project-image', $('#myModal')).attr("alt", test_obj[project_id].img_alt_text);
	$('.subtitle', $('#myModal')).replaceWith('<span class="subtitle">' + test_obj[project_id].subtitle + '</span>');
	$('.description', $('#myModal')).replaceWith('<span class="description">' + test_obj[project_id].description + '</span>');
	$('.modal-link', $('#myModal')).attr("href", test_obj[project_id].github_link);
}
