User.create!({
               username: "Adam",
               password: "password",
               admin: true
             })

Customer.create!([
                   {
                     first_name: 'Adam',
                     last_name: 'Goldwater',
                     phone_number: '1234567890',
                     last_purchase_year: 2022,
                     active: true
                   },
                   {
                     first_name: 'Kovi',
                     last_name: 'Galster',
                     phone_number: '0987654321',
                     last_purchase_year: 2022,
                     active: true
                   },
                   {
                     first_name: 'Geoff',
                     last_name: 'Winner',
                     phone_number: '1111111111',
                     last_purchase_year: 2022,
                     active: true
                   },
                 ])

Hadasim.create!([
                  {
                    kind: "Standard",
                    price: "8",
                    year: "2023",
                    active: true
                  },
                  {
                    kind: "A Bronsorfer",
                    price: "12",
                    year: "2023",
                    active: true
                  },
                  {
                    kind: "AA ChazonIsh",
                    price: "35",
                    year: "2023",
                    active: true
                  }
                ])

Lulav.create!([
                {
                  kind: "Standard",
                  price: "15",
                  year: "2023",
                  active: true
                },
                {
                  kind: "Std Comp Set",
                  price: "35",
                  year: "2023",
                  active: true
                },
                {
                  kind: "Much",
                  price: "25",
                  year: "2023",
                  active: true
                },
                {
                  kind: "A Deri w esg",
                  price: "45",
                  year: "2023",
                  active: true
                },
                {
                  kind: "A Deri wo esg",
                  price: "55",
                  year: "2023",
                  active: true
                },
                {
                  kind: "AA Deri w esg",
                  price: "45",
                  year: "2023",
                  active: true
                },
                {
                  kind: "AA Deri wo esg",
                  price: "65",
                  year: "2023",
                  active: true
                }
              ])

Grade.create!([
                {
                  grade: "Mk",
                  year: "2023"
                },
                {
                  grade: "MkBig",
                  year: "2023"
                },
                {
                  grade: "M3+",
                  year: "2023"
                },
                {
                  grade: "M2",
                  year: "2023"
                },
                {
                  grade: "Y1p",
                  year: "2023"
                },
                {
                  grade: "Y2np",
                  year: "2023"
                },
                {
                  grade: "cMKC1",
                  year: "2023"
                },
                {
                  grade: "cMCK2",
                  year: "2023"
                },
                {
                  grade: "cM3P+",
                  year: "2023"
                },
                {
                  grade: "cC1",
                  year: "2023"
                },
                {
                  grade: "cC2",
                  year: "2023"
                },
                {
                  grade: "cC3",
                  year: "2023"
                },
                {
                  grade: "Special",
                  year: "2023"
                }
              ])

Extra.create!([
                {
                  kind: "Hard Plastic Lulav bag",
                  price: "10",
                  year: "2023",
                  active: true
                },
                {
                  kind: "5 finger Kosheklach",
                  price: "12",
                  year: "2023",
                  active: true
                },
                {
                  kind: "Crown Kosheklach",
                  price: "18",
                  year: "2023",
                  active: true
                }
              ])

Aravot.create!([
                 {
                   kind: "Extra Set",
                   price: "5",
                   year: "2023",
                   active: true
                 },
                 {
                   kind: "Free Gift",
                   price: "0",
                   year: "2023",
                   active: true
                 }
               ])

Esrog.create!([
                {
                  kind: "Moroccan",
                  pitum: false,
                  year: "2023",
                  active: true
                },
                {
                  kind: "Yanover w pitum",
                  pitum: true,
                  year: "2023",
                  active: true
                },
                {
                  kind: "Yanover no pitum",
                  pitum: false,
                  year: "2023",
                  active: true
                },
                {
                  kind: "ChazIsh Morocco",
                  pitum: false,
                  year: "2023",
                  active: true
                },
                {
                  kind: "ChazIsh Cali",
                  pitum: false,
                  year: "2023",
                  active: true
                },
              ])

