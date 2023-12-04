const container = document.getElementById("container");

container.addEventListener("click", function () {
  const svgCode = `
      <svg xmlns="/img/select-mark.svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
        <ellipse cx="9.52381" cy="9.39683" rx="9.52381" ry="9.39683" fill="#469BFF" />
        <path d="M4.7619 8.39942L8.57143 12.4979L14.7619 6.57788" stroke="white" stroke-linecap="round" />
      </svg>
    `;

  // div 요소를 생성합니다.
  const divElement = document.createElement("div");
  divElement.classList.add("select");

  // SVG 코드를 div 요소 안에 넣습니다.
  divElement.innerHTML = svgCode;

  // 생성한 div 요소를 container에 추가합니다.
  container.appendChild(divElement);
});
