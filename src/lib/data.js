// TEMPORARY DATA
const users = [
  { id: 1, name: "LinkedIn" },
  { id: 2, name: "Github" },
  { id: 3, name: "Velog" },
];
const posts = [
  {
    id: 1,
    title: "LinkedIn",
    minibody: "LinkedIn 커뮤니티 활동을 통해 개발에 대한 내용을 공유합니다.",
    body: "LinkedIn에는 제가 진행하는 프로젝트와 학습 내용, 학력을 기재해 두었습니다. 또한, 커뮤니티 활동을 통해 다양한 정보를 공유하고 받아보며 활발히 소통하고 있습니다.",
    userId: 1,
    img: "https://img.freepik.com/photos-premium/icone-linkedin-fond-bleu_75891-2167.jpg",
    link: "https://www.linkedin.com/in/dowon-kim-415646237/",
  },
  {
    id: 2,
    title: "Github",
    minibody: "GitHub를 통해 개발에 대한 내용을 공유합니다.",
    body: "GitHub를 통해 저는 평소에 학습하고 개발한 내용을 기록하고 있습니다. 이는 제 개인적인 성장을 위한 자료 저장소 역할을 하며, 동시에 제 프로젝트들을 체계적으로 관리할 수 있게 해줍니다. GitHub의 사용은 저에게 있어 단지 코드를 저장하는 것 이상의 의미를 가집니다; 그것은 지속적인 학습과 성장을 위한 기반을 마련해주는 중요한 수단입니다.",
    userId: 2,
    img: "https://blog.kakaocdn.net/dn/cfdtzs/btricCWSjz9/K8vKISnXrMEUH8yKvOABL1/img.png",
    link: "https://github.com/KoreaMoney",
  },
  {
    id: 3,
    title: "Velog",
    minibody: "Velog를 통해 개발에 대한 내용 및 교육, 학습을 공유합니다.",
    body: "Velog에는 개발을 하면서 느낀 점을 담은 회고록과 교육 자료, 학습 내용을 작성하고 있습니다. 이를 통해 더 나은 개발자로 성장하는 과정을 기록하고 공유하고 있습니다.",
    userId: 3,
    img: "https://images.velog.io/images/kim-mg/post/b6928585-e245-4e5f-b878-0bbf278e5886/velog_logo.png",
    link: "https://velog.io/@korea-dollar/posts",
  },
];

export const getPosts = async () => {
  return posts;
};

export const getPost = async (id) => {
  const post = posts.find((post) => post.id === parseInt(id));
  return post;
};

export const getUser = async (id) => {
  const user = users.find((user) => user.id === parseInt(id));
  console.log(user);
  console.log(id);
  return user;
};
