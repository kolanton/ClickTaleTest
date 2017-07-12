let assert = require("assert");
let expect = require("expect");
let workersMock = [
  {
    id: 1,
    first_name: "Elva",
    last_name: "Monier",
    email: "emonier0@ezinearticles.com",
    gender: "Female",
    job_title: "Graphic Designer",
    avatar: "https://robohash.org/reiciendisquasicum.jpg?size=50x50&set=set1",
    link: "http://aol.com/leo/pellentesque.png",
    description:
      "suspendisse accumsan tortor quis turpis sed ante vivamus tortor duis mattis egestas metus aenean fermentum donec ut mauris eget massa"
  },
  {
    id: 2,
    first_name: "Amii",
    last_name: "Preon",
    email: "apreon1@4shared.com",
    gender: "Female",
    job_title: "Quality Engineer",
    avatar: "https://robohash.org/sinttemporefacilis.png?size=50x50&set=set1",
    link: "https://istockphoto.com/donec.png",
    description:
      "amet eleifend pede libero quis orci nullam molestie nibh in lectus pellentesque at nulla suspendisse potenti cras in purus eu"
  },
  {
    id: 3,
    first_name: "Melisandra",
    last_name: "Ewings",
    email: "mewings2@skyrock.com",
    gender: "Female",
    job_title: "Software Engineer I",
    avatar: "https://robohash.org/voluptasquodrerum.bmp?size=50x50&set=set1",
    link: "https://purevolume.com/augue/luctus.jsp",
    description:
      "magna vulputate luctus cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus vivamus vestibulum sagittis sapien cum"
  },
  {
    id: 4,
    first_name: "Bernhard",
    last_name: "Kingsbury",
    email: "bkingsbury3@rediff.com",
    gender: "Male",
    job_title: "Civil Engineer",
    avatar: "https://robohash.org/vitaequicum.bmp?size=50x50&set=set1",
    link: "http://elpais.com/elit/sodales/scelerisque/mauris.aspx",
    description:
      "eget eros elementum pellentesque quisque porta volutpat erat quisque erat eros viverra eget congue eget semper rutrum nulla nunc purus"
  },
  {
    id: 5,
    first_name: "Angil",
    last_name: "Randales",
    email: "arandales4@noaa.gov",
    gender: "Female",
    job_title: "Administrative Assistant I",
    avatar: "https://robohash.org/isteeosdolorum.jpg?size=50x50&set=set1",
    link: "https://webnode.com/aliquam/augue.json",
    description:
      "sapien placerat ante nulla justo aliquam quis turpis eget elit sodales scelerisque mauris sit amet eros suspendisse accumsan tortor quis"
  },
  {
    id: 6,
    first_name: "Fianna",
    last_name: "McGeever",
    email: "fmcgeever5@google.it",
    gender: "Female",
    job_title: "Tax Accountant",
    avatar: "https://robohash.org/remautautem.bmp?size=50x50&set=set1",
    link: "https://storify.com/augue/vestibulum.jpg",
    description:
      "magna bibendum imperdiet nullam orci pede venenatis non sodales sed tincidunt eu felis fusce posuere felis sed lacus morbi sem"
  },
  {
    id: 7,
    first_name: "Jeralee",
    last_name: "Terzi",
    email: "jterzi6@fema.gov",
    gender: "Female",
    job_title: "VP Marketing",
    avatar: "https://robohash.org/inventoresednobis.bmp?size=50x50&set=set1",
    link: "https://google.de/nulla/tempus/vivamus.json",
    description:
      "in est risus auctor sed tristique in tempus sit amet sem fusce consequat nulla nisl nunc nisl duis bibendum felis"
  },
  {
    id: 8,
    first_name: "Ruby",
    last_name: "Bartoshevich",
    email: "rbartoshevich7@ted.com",
    gender: "Male",
    job_title: "Chief Design Engineer",
    avatar:
      "https://robohash.org/consequatursuntpossimus.bmp?size=50x50&set=set1",
    link: "http://accuweather.com/tempus.json",
    description:
      "in hac habitasse platea dictumst aliquam augue quam sollicitudin vitae consectetuer eget rutrum at lorem integer tincidunt ante vel ipsum"
  },
  {
    id: 9,
    first_name: "Jesus",
    last_name: "Ritchard",
    email: "jritchard8@google.de",
    gender: "Male",
    job_title: "Environmental Specialist",
    avatar: "https://robohash.org/distinctionobisfuga.bmp?size=50x50&set=set1",
    link: "http://google.com.au/porta.png",
    description:
      "amet diam in magna bibendum imperdiet nullam orci pede venenatis non sodales sed tincidunt eu felis fusce posuere felis sed"
  },
  {
    id: 10,
    first_name: "Minnaminnie",
    last_name: "McDugal",
    email: "mmcdugal9@marriott.com",
    gender: "Female",
    job_title: "Design Engineer",
    avatar: "https://robohash.org/etvoluptatemest.png?size=50x50&set=set1",
    link: "https://163.com/a.aspx",
    description:
      "eu massa donec dapibus duis at velit eu est congue elementum in hac habitasse platea dictumst morbi vestibulum velit id"
  },
  {
    id: 11,
    first_name: "Jesus",
    last_name: "Ritchard",
    email: "jritchard8@google.de",
    gender: "Male",
    job_title: "Environmental Specialist",
    avatar: "https://robohash.org/distinctionobisfuga.bmp?size=50x50&set=set1",
    link: "http://google.com.au/porta.png",
    description:
      "amet diam in magna bibendum imperdiet nullam orci pede venenatis non sodales sed tincidunt eu felis fusce posuere felis sed"
  },
  {
    id: 12,
    first_name: "Minnaminnie",
    last_name: "McDugal",
    email: "mmcdugal9@marriott.com",
    gender: "Female",
    job_title: "Design Engineer",
    avatar: "https://robohash.org/etvoluptatemest.png?size=50x50&set=set1",
    link: "https://163.com/a.aspx",
    description:
      "eu massa donec dapibus duis at velit eu est congue elementum in hac habitasse platea dictumst morbi vestibulum velit id"
  }
];
let WorkerApi = require("./workersApi").default;
describe("Worker api class", function() {
  describe("Properties", function() {
    it("should have key limit and card limit properties", function() {
      assert.equal(
        true,
        WorkerApi.Props().hasOwnProperty("keyLimit") &&
          WorkerApi.Props().hasOwnProperty("cardLimit")
      );
    });
    it("should have key limit and card limit as numbers", function() {
      assert.equal(
        true,
        !isNaN(WorkerApi.Props().hasOwnProperty("keyLimit")) &&
          !isNaN(WorkerApi.Props().hasOwnProperty("cardLimit"))
      );
    });
  });

  describe("createPagingArray", function() {
    let res = WorkerApi.createPagingArray(3, 10, "d");
    it("return type should be object", function() {
      assert.equal(true, res instanceof Object);
    });
    it("object should has key,current,data properties inside data", function() {
      assert.equal(
        true,
        res.hasOwnProperty("key") &&
          res.hasOwnProperty("current") &&
          res.hasOwnProperty("data")
      );
    });
    it("data property should be array", function() {
      assert.equal(true, Array.isArray(res.data));
    });
    it("if it has results it should has id,active properties inside data", function() {
      assert.equal(
        true,
        res.data[0].hasOwnProperty("active") && res.data[0].hasOwnProperty("id")
      );
    });
  });

  describe("matchPattern", function() {
    let matchedData = WorkerApi.matchPattern("A", 1);
    it("return type should be boolean and return true", function() {
      assert.equal(true, matchedData);
    });
    it("should be case insensetive", function() {
      assert.equal(true, matchedData);
    });
  });

  describe("getWorkers", function() {
    let workers = WorkerApi.getWorkers("a");
    it("return type should be array", function() {
      assert.equal(true, Array.isArray(workers));
    });
    it("should support complex key", function() {
      let workersens = WorkerApi.getWorkers("Elva Monier");
      assert.equal(true, workersens.length > 0);
    });
    it("should be case insensetive", function() {
      assert.equal(true, workers.length > 0);
    });
  });

  describe("getWorkersPagingData", function() {
    let pData = WorkerApi.getWorkersPagingData(workersMock, 0);
    it("return type should be array", function() {
      assert.equal(true, Array.isArray(pData));
    });
  });

  describe("getWorkerDataByKey", function() {
    let workers = WorkerApi.getWorkerDataByKey("A", 0);
    it("if it has results it should has cardsData,pagingData properties", function() {
      assert.equal(
        true,
        workers.hasOwnProperty("cardsData") &&
          workers.hasOwnProperty("pagingData")
      );
    });
  });

  describe("getKeys", function() {
    let keys = WorkerApi.getKeys("A");
    it("return type should be array", function() {
      assert.equal(true, Array.isArray(keys));
    });
  });
});
