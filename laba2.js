function gnomeSort(arr) {
  let i = 0;
  while (i < arr.length) {
    if (i == 0 || arr[i] >= arr[i - 1]) {
      i++;
    } else {
      // ������� �������� ������
      let temp = arr[i];
      arr[i] = arr[i - 1];
      arr[i - 1] = temp;
      // ���������� ����� �� ���-������� � ����������� ������� �������� ��������, �� ���� �������
      displayArray(arr, i - 1, i);
      i--;
    }
  }
}

function displayArray(arr, index1, index2) {
  let output = "";
  for (let i = 0; i < arr.length; i++) {
    let color = "";
    if (i == index1 || i == index2) {
      color = "color: pink;";
    }
    output += "<div style='" + color + "'>" + arr[i] + "</div>";
  }
  // ���������� ����� �� ���-�������
  document.getElementById("array").innerHTML = output;
}

// �������� ����� �� ����������� �� ��������� �������� ��� ���������� ������
document.getElementById("sort-button").addEventListener("click", function() {
  let input = document.getElementById("array-input").value;
  let arr = input.split(",").map(Number);
  gnomeSort(arr);
});