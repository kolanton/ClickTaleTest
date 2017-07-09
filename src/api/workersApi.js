//api wil be fully covered with tests
import WorkerModel from './workerModel';

class WorkerApi {

  static MockData() {
    return [{
        "id": 1,
        "first_name": "Elva",
        "last_name": "Monier",
        "email": "emonier0@ezinearticles.com",
        "gender": "Female",
        "job_title": "Graphic Designer",
        "avatar": "https://robohash.org/reiciendisquasicum.jpg?size=50x50&set=set1",
        "link": "http://aol.com/leo/pellentesque.png",
        "description": "suspendisse accumsan tortor quis turpis sed ante vivamus tortor duis mattis egestas metus aenean fermentum donec ut mauris eget massa"
      },
      {
        "id": 2,
        "first_name": "Amii",
        "last_name": "Preon",
        "email": "apreon1@4shared.com",
        "gender": "Female",
        "job_title": "Quality Engineer",
        "avatar": "https://robohash.org/sinttemporefacilis.png?size=50x50&set=set1",
        "link": "https://istockphoto.com/donec.png",
        "description": "amet eleifend pede libero quis orci nullam molestie nibh in lectus pellentesque at nulla suspendisse potenti cras in purus eu"
      },
      {
        "id": 3,
        "first_name": "Melisandra",
        "last_name": "Ewings",
        "email": "mewings2@skyrock.com",
        "gender": "Female",
        "job_title": "Software Engineer I",
        "avatar": "https://robohash.org/voluptasquodrerum.bmp?size=50x50&set=set1",
        "link": "https://purevolume.com/augue/luctus.jsp",
        "description": "magna vulputate luctus cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus vivamus vestibulum sagittis sapien cum"
      },
      {
        "id": 4,
        "first_name": "Bernhard",
        "last_name": "Kingsbury",
        "email": "bkingsbury3@rediff.com",
        "gender": "Male",
        "job_title": "Civil Engineer",
        "avatar": "https://robohash.org/vitaequicum.bmp?size=50x50&set=set1",
        "link": "http://elpais.com/elit/sodales/scelerisque/mauris.aspx",
        "description": "eget eros elementum pellentesque quisque porta volutpat erat quisque erat eros viverra eget congue eget semper rutrum nulla nunc purus"
      },
      {
        "id": 5,
        "first_name": "Angil",
        "last_name": "Randales",
        "email": "arandales4@noaa.gov",
        "gender": "Female",
        "job_title": "Administrative Assistant I",
        "avatar": "https://robohash.org/isteeosdolorum.jpg?size=50x50&set=set1",
        "link": "https://webnode.com/aliquam/augue.json",
        "description": "sapien placerat ante nulla justo aliquam quis turpis eget elit sodales scelerisque mauris sit amet eros suspendisse accumsan tortor quis"
      },
      {
        "id": 6,
        "first_name": "Fianna",
        "last_name": "McGeever",
        "email": "fmcgeever5@google.it",
        "gender": "Female",
        "job_title": "Tax Accountant",
        "avatar": "https://robohash.org/remautautem.bmp?size=50x50&set=set1",
        "link": "https://storify.com/augue/vestibulum.jpg",
        "description": "magna bibendum imperdiet nullam orci pede venenatis non sodales sed tincidunt eu felis fusce posuere felis sed lacus morbi sem"
      },
      {
        "id": 7,
        "first_name": "Jeralee",
        "last_name": "Terzi",
        "email": "jterzi6@fema.gov",
        "gender": "Female",
        "job_title": "VP Marketing",
        "avatar": "https://robohash.org/inventoresednobis.bmp?size=50x50&set=set1",
        "link": "https://google.de/nulla/tempus/vivamus.json",
        "description": "in est risus auctor sed tristique in tempus sit amet sem fusce consequat nulla nisl nunc nisl duis bibendum felis"
      },
      {
        "id": 8,
        "first_name": "Ruby",
        "last_name": "Bartoshevich",
        "email": "rbartoshevich7@ted.com",
        "gender": "Male",
        "job_title": "Chief Design Engineer",
        "avatar": "https://robohash.org/consequatursuntpossimus.bmp?size=50x50&set=set1",
        "link": "http://accuweather.com/tempus.json",
        "description": "in hac habitasse platea dictumst aliquam augue quam sollicitudin vitae consectetuer eget rutrum at lorem integer tincidunt ante vel ipsum"
      },
      {
        "id": 9,
        "first_name": "Jesus",
        "last_name": "Ritchard",
        "email": "jritchard8@google.de",
        "gender": "Male",
        "job_title": "Environmental Specialist",
        "avatar": "https://robohash.org/distinctionobisfuga.bmp?size=50x50&set=set1",
        "link": "http://google.com.au/porta.png",
        "description": "amet diam in magna bibendum imperdiet nullam orci pede venenatis non sodales sed tincidunt eu felis fusce posuere felis sed"
      },
      {
        "id": 10,
        "first_name": "Minnaminnie",
        "last_name": "McDugal",
        "email": "mmcdugal9@marriott.com",
        "gender": "Female",
        "job_title": "Design Engineer",
        "avatar": "https://robohash.org/etvoluptatemest.png?size=50x50&set=set1",
        "link": "https://163.com/a.aspx",
        "description": "eu massa donec dapibus duis at velit eu est congue elementum in hac habitasse platea dictumst morbi vestibulum velit id"
      },
      {
        "id": 11,
        "first_name": "Jesus",
        "last_name": "Ritchard",
        "email": "jritchard8@google.de",
        "gender": "Male",
        "job_title": "Environmental Specialist",
        "avatar": "https://robohash.org/distinctionobisfuga.bmp?size=50x50&set=set1",
        "link": "http://google.com.au/porta.png",
        "description": "amet diam in magna bibendum imperdiet nullam orci pede venenatis non sodales sed tincidunt eu felis fusce posuere felis sed"
      },
      {
        "id": 12,
        "first_name": "Minnaminnie",
        "last_name": "McDugal",
        "email": "mmcdugal9@marriott.com",
        "gender": "Female",
        "job_title": "Design Engineer",
        "avatar": "https://robohash.org/etvoluptatemest.png?size=50x50&set=set1",
        "link": "https://163.com/a.aspx",
        "description": "eu massa donec dapibus duis at velit eu est congue elementum in hac habitasse platea dictumst morbi vestibulum velit id"
      }
    ];

  }

  static RepoData() {
    let mockData = this.MockData() || [];
    if (typeof window !== 'undefined') {
      mockData = window.data
    }
    return mockData;
  }

  static Props() {
    return {
      keyLimit: 10,
      cardLimit: 5,
    };
  }

  static getKeys(key, repoData = this.RepoData()) {
    if (key && key.length < 1) return [];
    let result = new Array();
    for (let index = 0, limit = 0; index < repoData.length && limit < this.Props().keyLimit; index++) {
      if (this.matchPattern(key, index)) {
        result.push(repoData[index].first_name + " " + repoData[index].last_name);
        limit++;
      }

    }
    return result;
  }

  static matchPattern(key, index, repoData = this.RepoData()) {

    if (!key || !repoData[index]) return false;
    return repoData[index].first_name.toLowerCase().startsWith(key.toLowerCase()) ||
      repoData[index].last_name.toLowerCase().startsWith(key.toLowerCase()) ||
      (repoData[index].first_name.toLowerCase() + repoData[index].last_name.toLowerCase()).startsWith(key.replace(" ", "").toLowerCase());
  }

  static getWorkerDataByKey(key, pageIndex) {
    let allCards = this.getWorkers(key);
    let currentCardsData = this.getWorkersPagingData(allCards, pageIndex);
    let currentPagingData = this.createPagingArray(pageIndex, allCards.length, key);

    return {
      cardsData: currentCardsData,
      pagingData: currentPagingData
    };
  }

  static getWorkers(key, repoData = this.RepoData()) {
    if (typeof key === 'undefined' || key.length === 0) return [];
    let result = new Array();
    for (let index = 0; index < repoData.length; index++) {
      if (this.matchPattern(key, index)) {
        result.push(repoData[index]);
      }
    }
    return result;
  }

  static getWorkersPagingData(workers, pageIndex) {
    let start = pageIndex * this.Props().cardLimit;
    let end = start + this.Props().cardLimit;
    let data = workers.slice(start, end);
    return data;
  }

  static createPagingArray(pageIndex, countCards, key) {
    let res = new Array();
    let count = Math.ceil(countCards / this.Props().cardLimit);
    for (let index = 0; index < count; index++) {
      res.push({
        id: index,
        active: pageIndex,
        key: key
      });
    }
    return res;
  }
}

export default WorkerApi;