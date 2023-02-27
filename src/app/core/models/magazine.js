class Magazine {
  constructor(id, title, volume, issue, author){
    this.id = id
    this.title = title 
    this.volume = volume 
    this.issue = issue
    this.author = author
    this.type = "magazine"
    this.img = require("../assets/icons/magazine.png")
  }

  static rawDataToMagazine(dataRaw){
    return new Magazine(dataRaw['id'], dataRaw['title'], dataRaw['volume'], dataRaw['issue'], dataRaw['author'])
  }

  static rawDataToMagazines(dataRaw){
    return dataRaw.map(raw => Magazine.rawDataToMagazine(raw))
  }

  static sampleData(){
    var data = [
      {
        id: 1,
        title: "Magazine 1",
        volume: "10",
        issue: "4",
        author: "Jane Doe"
      },
      {
        id: 2,
        title: "Magazine 2",
        volume: "10",
        issue: "4",
        author: "Jane Doe"
      },
      {
        id: 3,
        title: "Magazine 3",
        volume: "10",
        issue: "4",
        author: "Jane Doe"
      },
    ]
  }
}

export default Magazine;