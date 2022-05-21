const memeData = [
    {
        "id": 1,
        "name": "Red-cheeked cordon bleu",
        "description": "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.",
        "categories": [
            "Cercopithecus aethiops",
            "Bassariscus astutus"
        ],
        "dateModified": "2021/12/16",
        "image": "http://dummyimage.com/300x300.png/ff4444/ffffff"
    }, {
        "id": 2,
        "name": "Civet (unidentified)",
        "description": "Quisque ut erat. Curabitur gravida nisi at nibh.",
        "categories": [
            "Spilogale gracilis",
            "Podargus strigoides"
        ],
        "dateModified": "2021/11/30",
        "image": "http://dummyimage.com/300x300.png/dddddd/000000"
    }, {
        "id": 3,
        "name": "Barbet, levaillant's",
        "description": "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh.",
        "categories": [
            "Nasua nasua",
            "Lycaon pictus",
            "Lemur fulvus"
        ],
        "dateModified": "2022/02/01",
        "image": "http://dummyimage.com/300x300.png/ff4444/ffffff"
    }, {
        "id": 4,
        "name": "White-faced tree rat",
        "description": "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.",
        "categories": [
            "Alopochen aegyptiacus"
        ],
        "dateModified": "2021/09/26",
        "image": "http://dummyimage.com/300x300.png/5fa2dd/ffffff"
    }, {
        "id": 5,
        "name": "Pied crow",
        "description": "Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum.",
        "categories": [
            "Alopochen aegyptiacus"
        ],
        "dateModified": "2021/07/17",
        "image": "http://dummyimage.com/300x300.png/5fa2dd/ffffff"
    }, {
        "id": 6,
        "name": "Reindeer",
        "description": "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus.",
        "categories": [
            "Graspus graspus",
            "Zalophus californicus"
        ],
        "dateModified": "2022/04/10",
        "image": "http://dummyimage.com/300x300.png/5fa2dd/ffffff"
    }, {
        "id": 7,
        "name": "Whale, killer",
        "description": "Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo.",
        "categories": [
            "Crotaphytus collaris",
            "Helogale undulata"
        ],
        "dateModified": "2022/03/05",
        "image": "http://dummyimage.com/300x300.png/5fa2dd/ffffff"
    }, {
        "id": 8,
        "name": "Gray rhea",
        "description": "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
        "categories": [
            "Odocoileus hemionus",
            "Paraxerus cepapi",
            "Aonyx cinerea"
        ],
        "dateModified": "2022/01/19",
        "image": "http://dummyimage.com/300x300.png/ff4444/ffffff"
    }, {
        "id": 9,
        "name": "White-throated robin",
        "description": "Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
        "categories": [
            "Antechinus flavipes"
        ],
        "dateModified": "2022/02/19",
        "image": "http://dummyimage.com/300x300.png/dddddd/000000"
    }, {
        "id": 10,
        "name": "African black crake",
        "description": "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
        "categories": [
            "Egretta thula"
        ],
        "dateModified": "2021/09/19",
        "image": "http://dummyimage.com/300x300.png/ff4444/ffffff"
    }
];

export function getAllMemes() {
    return memeData;
}

export function getMemeById(id) {
    return memeData.find((meme) => meme.id == id);
}

export function filterMemesByName(keyword) {
    return memeData.filter((meme) => meme.name.toLowerCase().indexOf(keyword.toLowerCase()) > -1)
}

export function createMeme(memeData) {

}

export function editMeme(id, memeData) {

}

export function deleteMeme(id) {

}