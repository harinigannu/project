window.onload = function () {
  var chart = new CanvasJS.Chart("chartContainer", {
    theme: "dark2", // "light1", "light2", "dark1", "dark2"
    exportEnabled: true,
    animationEnabled: true,
    title: {
      text: "Wins by Various Teams from 2008-2021",
    },
    data: [
      {
        type: "pie",
        startAngle: 25,
        toolTipContent: "<b>{label}</b>: {y}%",
        showInLegend: "true",
        legendText: "{label}",
        indexLabelFontSize: 16,
        indexLabel: "{label} - {y}%",
        dataPoints: [
          { y: 35.71, label: "Mumbai Indians" },
          { y: 21.43, label: "Chennai Super Kings" },
          { y: 14.29, label: "Kolkata Knight Riders" },
          { y: 7.14, label: "Rajasthan Royals" },
          { y: 14.29, label: "Sunrisers Hyderabad" },
          { y: 7.14, label: "Royal Challengers Bangalore" },
        ],
      },
    ],
  });
  chart.render();
};
$(document).ready(function () {
  var teamList = [
    {
      teamName: "KKR",
      teamIcon:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS38okPQxD_O48Dj_AjqW0URJLDjLIaWhIS08ChQsZC9F24odp_tZ-fxUMs3NjcPJXCisQ&usqp=CAU",
      playerCount: 17,
      topBatsman: "Shubman Gill",
      topBowler: "Varun Chakravarthy",
      winningStreak: 2,
    },
    {
      teamName: "CSK",
      teamIcon:
        "https://i.pinimg.com/originals/ea/40/fd/ea40fd13fa7d46618c5567146f07ba41.png",
      playerCount: 25,
      topBatsman: "Suresh Raina",
      topBowler: "Dwayne Bravo",
      winningStreak: 3,
    },
    {
      teamName: "MI",
      teamIcon:
        "https://yt3.ggpht.com/ytc/AKedOLSUVdCLLVCeY9sPVTwI0TqcCmHMivFtotMR1VyrZg=s900-c-k-c0x00ffffff-no-rj",
      playerCount: 14,
      topBatsman: "Rohit Sharma",
      topBowler: "Lasith Malinga",
      winningStreak: 5,
    },
    {
      teamName: "DC",
      teamIcon:
        "https://i.pinimg.com/originals/cb/8f/20/cb8f20c8797a3c27640314743bfbb528.jpg",
      playerCount: 19,
      topBatsman: "Virender Sehwag",
      topBowler: "Kagiso Rabada",
      winningStreak: 0,
    },
    {
      teamName: "RCB",
      teamIcon:
        "https://static-ai.asianetnews.com/images/01f38srdeg1dq9t1mt785yhy1c/rcb-png.jpg",
      playerCount: 12,
      topBatsman: "David Warner",
      topBowler: "Yuzvendra Chahal",
      winningStreak: 1,
    },
    {
      teamName: "KXIP",
      teamIcon:
        "https://th.bing.com/th/id/OIP.clSKSkoGpEotIgSpPRriFgHaIX?pid=ImgDet&rs=1",
      playerCount: 16,
      topBatsman: "Dawid Malan",
      topBowler: "Piyush Chawla",
      winningStreak: 0,
    },
    {
      teamName: "SH",
      teamIcon: "https://readscoops.com/wp-content/uploads/2021/04/SRH.jpg",
      playerCount: 22,
      topBatsman: "David Warner",
      topBowler: "Rashid Khan",
      winningStreak: 2,
    },
    {
      teamName: "RR",
      teamIcon:
        "https://www.sportsmirchi.com/wp-content/uploads/2015/03/Rajasthan-Royals-squad-for-IPL-2015.jpg",
      playerCount: 17,
      topBatsman: "Shivam Dube",
      topBowler: "Jofra Archer",
      winningStreak: 1,
    },
  ];
  $(".card").click(function () {
    for (var i = 0; i < teamList.length; i++) {
      if ($(this).find(".card-title").html() == teamList[i].teamName) {
        localStorage.setItem("teamDetails", JSON.stringify(teamList[i]));
        location.assign("teams.html");
      }
    }
  });
  $(".search-input-box").on("keyup", function () {
    var value = $(this).val().toUpperCase();
    $(".card").each(function () {
      var found = "false";
      var title = $(this)
        .children(".card-img-overlay")
        .children(".card-title")
        .html();
      if (title.indexOf(value) >= 0) found = "true";
      if (found == "true") $(this).show();
      else $(this).hide();
    });
  });
});
