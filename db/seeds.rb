# User.create!({
#                username: "adam",
#                display_name: "Adam",
#                password: "password",
#                admin: true
#              })
#
# Customer.create!([
#                    {
#                      first_name: 'Adam',
#                      last_name: 'Goldwater',
#                      phone_number: '2246563165',
#                      last_purchase_year: Date.current.year-1,
#                      active: true
#                    },
#                    {
#                      first_name: 'Kovi',
#                      last_name: 'Galster',
#                      phone_number: '0987654321',
#                      last_purchase_year: Date.current.year-1,
#                      active: true
#                    },
#                    {
#                      first_name: 'Geoff',
#                      last_name: 'Winner',
#                      phone_number: '1111111111',
#                      last_purchase_year: Date.current.year-2,
#                      active: true
#                    },
#                  ])

Hadasim.create!([
                  {
                    kind: "Standard",
                    price: "8",
                    year: "#{Date.current.year}",
                    active: true
                  },
                  {
                    kind: "A Bronsorfer",
                    price: "12",
                    year: "#{Date.current.year}",
                    active: true
                  },
                  {
                    kind: "AA ChazonIsh",
                    price: "35",
                    year: "#{Date.current.year}",
                    active: true
                  }
                ])

Lulav.create!([
                {
                  kind: "Standard",
                  price: "15",
                  year: "#{Date.current.year}",
                  active: true
                },
                {
                  kind: "Std Comp Set",
                  price: "35",
                  year: "#{Date.current.year}",
                  active: true
                },
                {
                  kind: "Much",
                  price: "25",
                  year: "#{Date.current.year}",
                  active: true
                },
                {
                  kind: "A Deri w esg",
                  price: "45",
                  year: "#{Date.current.year}",
                  active: true
                },
                {
                  kind: "A Deri wo esg",
                  price: "55",
                  year: "#{Date.current.year}",
                  active: true
                },
                {
                  kind: "AA Deri w esg",
                  price: "45",
                  year: "#{Date.current.year}",
                  active: true
                },
                {
                  kind: "AA Deri wo esg",
                  price: "65",
                  year: "#{Date.current.year}",
                  active: true
                }
              ])

Grade.create!([
                {
                  grade: "Mk",
                  year: "#{Date.current.year}",
                  esrog_id: 1
                },
                {
                  grade: "MkBig",
                  year: "#{Date.current.year}",
                  esrog_id: 1
                },
                {
                  grade: "M3+",
                  year: "#{Date.current.year}",
                  esrog_id: 1
                },
                {
                  grade: "M2",
                  year: "#{Date.current.year}",
                  esrog_id: 1
                },
                {
                  grade: "Y1p",
                  year: "#{Date.current.year}",
                  esrog_id: 2
                },
                {
                  grade: "Y2np",
                  year: "#{Date.current.year}",
                  esrog_id: 3
                },
                {
                  grade: "cMKC1",
                  year: "#{Date.current.year}",
                  esrog_id: 4
                },
                {
                  grade: "cMCK2",
                  year: "#{Date.current.year}",
                  esrog_id: 4
                },
                {
                  grade: "cM3P+",
                  year: "#{Date.current.year}",
                  esrog_id: 4
                },
                {
                  grade: "cC1",
                  year: "#{Date.current.year}",
                  esrog_id: 4
                },
                {
                  grade: "cC2",
                  year: "#{Date.current.year}",
                  esrog_id: 4
                },
                {
                  grade: "cC3",
                  year: "#{Date.current.year}",
                  esrog_id: 4
                },
                {
                  grade: "Special",
                  year: "#{Date.current.year}",
                  esrog_id: 5
                }
              ])

Extra.create!([
                {
                  kind: "Hard Plastic Lulav bag",
                  price: "10",
                  year: "#{Date.current.year}",
                  active: true
                },
                {
                  kind: "5 finger Kosheklach",
                  price: "12",
                  year: "#{Date.current.year}",
                  active: true
                },
                {
                  kind: "Crown Kosheklach",
                  price: "18",
                  year: "#{Date.current.year}",
                  active: true
                }
              ])

Aravot.create!([
                 {
                   kind: "Extra Set",
                   price: "5",
                   year: "#{Date.current.year}",
                   active: true
                 },
                 {
                   kind: "Free Gift",
                   price: "0",
                   year: "#{Date.current.year}",
                   active: true
                 }
               ])

Esrog.create!([
                {
                  kind: "Moroccan",
                  pitum: false,
                  year: "#{Date.current.year}",
                  active: true
                },
                {
                  kind: "Yanover w pitum",
                  pitum: true,
                  year: "#{Date.current.year}",
                  active: true
                },
                {
                  kind: "Yanover no pitum",
                  pitum: false,
                  year: "#{Date.current.year}",
                  active: true
                },
                {
                  kind: "ChazIsh Morocco",
                  pitum: false,
                  year: "#{Date.current.year}",
                  active: true
                },
                {
                  kind: "ChazIsh Cali",
                  pitum: false,
                  year: "#{Date.current.year}",
                  active: true
                },
              ])

