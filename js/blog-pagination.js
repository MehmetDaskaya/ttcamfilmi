document.addEventListener("DOMContentLoaded", () => {
  const postsPerPage = 6; // Updated to show 6 posts per page
  const blogPosts = [
    {
      date: "26 Haz",
      title: "Cam Filminin Yararları",
      image: "https://picsum.photos/id/236/200/300",
      summary: "TT Cam Filmi kalitesiyle camlarınızı...",
      link: "cam-filminin-yararlari.html",
    },
    {
      date: "20 Haz",
      title: "Binada Cam Filmi",
      image: "https://picsum.photos/id/238/200/300",
      summary: "TT Cam Filmi ile binalarınızın cephelerini...",
      link: "binada-cam-filmi.html",
    },
    {
      date: "18 Haz",
      title: "Arabada Cam Filmi",
      image: "https://picsum.photos/id/239/200/300",
      summary: "TT Cam Filmi ile arabanızın camlarını en profesyonel...",
      link: "arabada-cam-filmi.html",
    },
    {
      date: "15 Haz",
      title: "Minimal Tasarımın Gücü",
      image: "https://picsum.photos/id/240/200/300",
      summary: "Lorem ipsum dolor sit amet...",
      link: "blog-yazilari/tvnizi-sik-gosterme-yollari.html",
    },
    {
      date: "5 Haz",
      title: "Evinizde Akıllı Teknoloji",
      image: "https://picsum.photos/id/257/200/300",
      summary: "Lorem ipsum dolor sit amet...",
      link: "blog-yazilari/tvnizi-sik-gosterme-yollari.html",
    },
    {
      date: "26 Haz",
      title: "Cam Filminin Yararları",
      image: "https://picsum.photos/id/267/200/300",
      summary: "TT Cam Filmi kalitesiyle camlarınızı...",
      link: "cam-filminin-yararlari.html",
    },
    {
      date: "18 Haz",
      title: "Arabada Cam Filmi",
      image: "https://picsum.photos/id/277/200/300",
      summary: "TT Cam Filmi ile arabanızın camlarını en profesyonel...",
      link: "arabada-cam-filmi.html",
    },
    {
      date: "15 Haz",
      title: "Minimal Tasarımın Gücü",
      image: "https://picsum.photos/id/287/200/300",
      summary: "Lorem ipsum dolor sit amet...",
      link: "blog-yazilari/tvnizi-sik-gosterme-yollari.html",
    },
    {
      date: "15 Haz",
      title: "Minimal Tasarımın Gücü",
      image: "https://picsum.photos/id/297/200/300",
      summary: "Lorem ipsum dolor sit amet...",
      link: "blog-yazilari/tvnizi-sik-gosterme-yollari.html",
    },
    {
      date: "10 Haz",
      title: "Ofis Dekorasyon Fikirleri",
      image: "https://picsum.photos/id/337/200/300",
      summary: "Lorem ipsum dolor sit amet...",
      link: "blog-yazilari/tvnizi-sik-gosterme-yollari.html",
    },
    {
      date: "5 Haz",
      title: "Evinizde Akıllı Teknoloji",
      image: "https://picsum.photos/id/227/200/300",
      summary: "Lorem ipsum dolor sit amet...",
      link: "blog-yazilari/tvnizi-sik-gosterme-yollari.html",
    },
    {
      date: "26 Haz",
      title: "Cam Filminin Yararları",
      image: "https://picsum.photos/id/937/200/300",
      summary: "TT Cam Filmi kalitesiyle camlarınızı...",
      link: "cam-filminin-yararlari.html",
    },
    {
      date: "20 Haz",
      title: "Binada Cam Filmi",
      image: "https://picsum.photos/id/837/200/300",
      summary: "TT Cam Filmi ile binalarınızın cephelerini...",
      link: "binada-cam-filmi.html",
    },
    {
      date: "18 Haz",
      title: "Arabada Cam Filmi",
      image: "https://picsum.photos/id/138/200/300",
      summary: "TT Cam Filmi ile arabanızın camlarını en profesyonel...",
      link: "arabada-cam-filmi.html",
    },
    {
      date: "15 Haz",
      title: "Minimal Tasarımın Gücü",
      image: "https://picsum.photos/id/222/200/300",
      summary: "Lorem ipsum dolor sit amet...",
      link: "blog-yazilari/tvnizi-sik-gosterme-yollari.html",
    },
    {
      date: "5 Haz",
      title: "Evinizde Akıllı Teknoloji",
      image: "https://picsum.photos/id/224/200/300",
      summary: "Lorem ipsum dolor sit amet...",
      link: "blog-yazilari/tvnizi-sik-gosterme-yollari.html",
    },
    {
      date: "26 Haz",
      title: "Cam Filminin Yararları",
      image: "https://picsum.photos/id/362/200/300",
      summary: "TT Cam Filmi kalitesiyle camlarınızı...",
      link: "cam-filminin-yararlari.html",
    },
    {
      date: "18 Haz",
      title: "Arabada Cam Filmi",
      image: "https://picsum.photos/id/563/200/300",
      summary: "TT Cam Filmi ile arabanızın camlarını en profesyonel...",
      link: "arabada-cam-filmi.html",
    },
    {
      date: "15 Haz",
      title: "Minimal Tasarımın Gücü",
      image: "https://picsum.photos/id/299/200/300",
      summary: "Lorem ipsum dolor sit amet...",
      link: "blog-yazilari/tvnizi-sik-gosterme-yollari.html",
    },
    {
      date: "5 Haz",
      title: "Evinizde Akıllı Teknoloji",
      image: "https://picsum.photos/id/266/200/300",
      summary: "Lorem ipsum dolor sit amet...",
      link: "blog-yazilari/tvnizi-sik-gosterme-yollari.html",
    },
  ];

  const totalPages = Math.ceil(blogPosts.length / postsPerPage);
  let currentPage = 1;

  function renderPosts() {
    const start = (currentPage - 1) * postsPerPage;
    const end = start + postsPerPage;
    const postsToDisplay = blogPosts.slice(start, end);

    const blogList = document.getElementById("blog-list");
    blogList.innerHTML = `
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6"> 
        ${postsToDisplay
          .map(
            (post) => `
          <article class="bg-white p-4 rounded-lg shadow-md">
            <img src="${post.image}" alt="${post.title}" class="w-full h-32 object-cover rounded">
            <div class="mt-4">
              <span class="text-yellow-500 font-bold">${post.date}</span>
              <h3 class="text-xl font-semibold mt-2">${post.title}</h3>
              <p class="text-gray-700 mt-2">${post.summary}</p>
           <a href="${post.link}" class="text-yellow-500 mt-4 inline-block font-bold" style="margin-left: auto; display: block;">Devamını Oku...</a>

            </div>
          </article>
        `
          )
          .join("")}
      </div>
    `;
  }

  function renderPagination() {
    const pagination = document.getElementById("blog-pagination");
    pagination.innerHTML = `
      <button onclick="changePage(${currentPage - 1})" ${
      currentPage === 1 ? "disabled" : ""
    } class="px-4 py-2 border">Önceki</button>
      ${Array.from(
        { length: totalPages },
        (_, i) =>
          `<button onclick="changePage(${i + 1})" class="px-4 py-2 border ${
            currentPage === i + 1 ? "bg-yellow-500 text-black" : ""
          }">${i + 1}</button>`
      ).join("")}
      <button onclick="changePage(${currentPage + 1})" ${
      currentPage === totalPages ? "disabled" : ""
    } class="px-4 py-2 border">Sonraki</button>
    `;
  }

  function changePage(page) {
    if (page < 1 || page > totalPages) return;
    currentPage = page;
    renderPosts();
    renderPagination();
  }

  // Expose the changePage function globally
  window.changePage = changePage;

  renderPosts();
  renderPagination();
});
