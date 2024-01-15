let arr = [
	{
		dp: "dp1.jpeg",
		story: "story1.jpg"
	},
	{
		dp: "dp2.jpg",
		story: "story2.jpg"
	},
	{
		dp: "dp3.jpg",
		story: "story3.jpeg"
	},
	{
		dp: "dp4.jpeg",
		story: "story4.jpg"
	},
	{
		dp: "dp5.jpg",
		story: "story5.jpeg"
	},
	{
		dp: "dp6.jpg",
		story: "story6.png"
	},
	{
		dp: "dp7.jpg",
		story: "story7.jpg"
	}
];

let storyArea = document.querySelector("#story-area");
let clutter = "";

arr.forEach(function (val, idx) {
	clutter += `<div id="${idx}" class="story"><img src="${val.dp}" alt="" id="${idx}"></div>`;
});

storyArea.innerHTML = clutter;

storyArea.addEventListener("click", function (dets) {
	document.querySelector("#full-screen").style.display = "block";
	document.querySelector("#full-screen").style.backgroundImage =
		`url(${arr[dets.target.id].story})`;
	// console.log(arr[dets.target.id].story);

	setTimeout(() => {
		document.querySelector("#full-screen").style.display = "none";
	}, 3000);
});

// let story = document.querySelectorAll(".story");

// for (let i = 0; i < story.length; i++) {
// 	story[i].addEventListener("click", function (dets) {
// 		console.log(dets.target.id);
// 	});
// }

// document.querySelectorAll(".story").forEach(function (storyDiv) {
// 	storyDiv.addEventListener("click", function (event) {
// 		console.log(storyDiv.id);
// 	});
// });
