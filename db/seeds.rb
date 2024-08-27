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
                  year: "#{Date.current.year}",
                  grade: "RCIC",
                  esrog_id: 1
                },
                {
                  year: "#{Date.current.year}",
                  grade: "2M",
                  esrog_id: 2
                },
                {
                  year: "#{Date.current.year}",
                  grade: "kM",
                  esrog_id: 2
                },
                {
                  year: "#{Date.current.year}",
                  grade: "DM",
                  esrog_id: 2
                },
                {
                  year: "#{Date.current.year}",
                  grade: "Y2",
                  esrog_id: 7
                },
                {
                  year: "#{Date.current.year}",
                  grade: "1M",
                  esrog_id: 2
                },
                {
                  year: "#{Date.current.year}",
                  grade: "MbCIC",
                  esrog_id: 1
                },
                {
                  year: "#{Date.current.year}",
                  grade: "ACIM",
                  esrog_id: 1
                },
                {
                  year: "#{Date.current.year}",
                  grade: "DCIM",
                  esrog_id: 1
                },
                {
                  year: "#{Date.current.year}",
                  grade: "SM",
                  esrog_id: 2
                },
                {
                  year: "#{Date.current.year}",
                  grade: "5CIC",
                  esrog_id: 1
                },
                {
                  year: "#{Date.current.year}",
                  grade: "Y1",
                  esrog_id: 6
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

