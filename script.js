function calculate() {
    let sub1 = parseFloat(document.getElementById("sub1").value);
    let sub2 = parseFloat(document.getElementById("sub2").value);
    let sub3 = parseFloat(document.getElementById("sub3").value);
    let sub4 = parseFloat(document.getElementById("sub4").value);
    let sub5 = parseFloat(document.getElementById("sub5").value);

    let total = sub1 + sub2 + sub3 + sub4 + sub5;
    let percentage = (total / 500) * 100;

    document.getElementById("percentage").innerHTML = "Percentage: " + percentage.toFixed(2) + "%";

    let grade = "";
    if (percentage >= 90) grade = "Grade: A+";
    else if (percentage >= 75) grade = "Grade: A";
    else if (percentage >= 60) grade = "Grade: B";
    else if (percentage >= 45) grade = "Grade: C";
    else grade = "Grade: Fail";

    document.getElementById("grade").innerHTML = grade;
}