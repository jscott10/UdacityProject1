/* modal-data.js
	Set the data for the modal
	 */

function setModalData(project_index)	{

	var test_obj = [ {
						"img_src" : "images/proj0-full.jpg",
						"title" : "Project 0",
						"subtitle" : "About Me",
						"link" : "https://github.com/jscott10/UdacityProject0" },

					 {
					 	"img_src" : "images/proj1-full.jpg",
						"title" : "Project 1",
						"subtitle" : "Portfolio",
						"link" : "https://github.com/jscott10/UdacityProject1" },

					 {
					 	"img_src" : "images/proj2-full.jpg",
						"title" : "Project 2",
						"subtitle" : "Interactive Résumé",
						"link" : "#" } ];

	$('.modal-title', $('#myModal')).append(test_obj[project_index].title);
	$('.project-image', $('#myModal')).attr("src", test_obj[project_index].img_src);
	$('.subtitle', $('#myModal')).append(test_obj[project_index].subtitle);
	$('.modal-link', $('#myModal')).attr("href", test_obj[project_index].link);

}
