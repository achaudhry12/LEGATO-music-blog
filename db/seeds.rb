# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Artist.destroy_all
Song.destroy_all
User.destroy_all

@user = User.create!(
  username: 'admin',
  email: 'admin@loon.com',
  password: 'loon123'
)

puts "#{User.count} users created!"

# Artist.create!(
#   stage_name: 'Post Malone',
#   full_name: 'Austin Richard Post',
#   image_url: 'https://i.scdn.co/image/93fec27f9aac86526b9010e882037afbda4e3d5f'
# )

# Artist.create!(
#   stage_name: 'The Growlers',
#   full_name: 'Brooks Nielsen, Kyle Straka, Brad Bowers, Richard Gowen',
#   image_url: 'https://i.scdn.co/image/83bf768c4e19fc222bccf05b45e149581bc72bdb'
# )

# Artist.create!(
#   stage_name: 'Adventure Club',
#   full_name: 'Christian Srigley, Leighton James',
#   image_url: 'https://i.scdn.co/image/7564bf3d72c31306de85faaaa97daa7958225bba'
# )

# Artist.create!(
#   stage_name: 'Rush',
#   full_name: 'Geddy Lee, Alex Lifeson, Neil Peart',
#   image_url: 'https://i.scdn.co/image/6fdfa7c623d77d5900e69eef2443340e3493a4bf'
# )

# Artist.create!(
#   stage_name: 'Queen',
#   full_name: 'Freddie Mercury, Brain May, Roger Taylor, John Deacon',
#   image_url: 'https://i.scdn.co/image/af2b8e57f6d7b5d43a616bd1e27ba552cd8bfd42'
# )

# Artist.create!(
#   stage_name: 'Mozart',
#   full_name: 'Wolfgang Amadeus Mozart',
#   image_url: 'https://www.biography.com/.image/t_share/MTE1ODA0OTcxNzMyNjY1ODY5/wolfgang-mozart-9417115-2-402.jpg'
# )

# Artist.create!(
#   stage_name: 'KSHMR',
#   full_name: 'Niles Hollowell-Dhar',
#   image_url: 'https://i.scdn.co/image/827aa43e7c4ff41408c93a4598db908a34778309'
# )

# Artist.create!(
#   stage_name: 'Oski',
#   full_name: 'Oski',
#   image_url: 'https://i.scdn.co/image/d7914fb7d6899f0ab747e6b04010945d04b2e91d'
# )

# Artist.create!(
#   stage_name: 'The Weeknd',
#   full_name: 'Abel Makkonen Tesfaye',
#   image_url: 'https://i.scdn.co/image/37376dba0623c33923eae9d234e5e199b76d227f'
# )

# Artist.create!(
#   stage_name: 'Tchami',
#   full_name: 'Martin Joseph Léonard Bresso',
#   image_url: 'https://i.scdn.co/image/fba4beaa7999eea46e7a9ceab15633be4eeff977'
# )

# Artist.create!(
#   stage_name: 'Coldplay',
#   full_name: 'Chris Martin, Jonny Buckland, Guy Berryman, Will Champion',
#   image_url: 'https://i.scdn.co/image/ab6761610000e5eb3bcd1c4d6f324498d3de6f8d'
# )

# Artist.create!(
#   stage_name: 'Stevie Wonder',
#   full_name: 'Stevland Hardaway Morris',
#   image_url: 'https://i.scdn.co/image/37c7875911b1d8195b05d40061a86bd01908a0d9'
# )

# Artist.create!(
#   stage_name: 'Nas',
#   full_name: 'Nasir bin Olu Dara Jones',
#   image_url: 'https://i.scdn.co/image/f730419a55fac73c1b59e29ccf06600a56b11b39'
# )

# Artist.create!(
#   stage_name: '6lack',
#   full_name: 'Ricardo Valdez Valentine Jr',
#   image_url: 'https://i.scdn.co/image/b95bf1fcc0b3491a8623419548a69add9bb5812f'
# )

# Artist.create!(
#   stage_name: 'Maude Latour',
#   full_name: 'Maude Latour',
#   image_url: 'https://i.scdn.co/image/751730f6596567198164052573670cc54b28e0ac'
# )

# Artist.create!(
#   stage_name: 'MAX',
#   full_name: 'Maxwell George Schneider',
#   image_url: 'https://i.scdn.co/image/ab67616d0000b273d48594c1f94e34eba9a1d490'
# )

# Artist.create!(
#   stage_name: 'The Strokes',
#   full_name: 'Julian Casablancas, Nick Valensi, Albert Hammond Jr., Nikolai Fraiture, Fabrizio Moretti',
#   image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/The_Strokes_by_Roger_Woolman.jpg/1200px-The_Strokes_by_Roger_Woolman.jpg'
# )

# Artist.create!(
#   stage_name: 'ODESZA',
#   full_name: 'Harrison Mills, Clayton Knight',
#   image_url: 'https://i.scdn.co/image/2d45e04208b55f434f31c6a46ee33e1693d23a9b'
# )

# Artist.create!(
#   stage_name: 'Illenium',
#   full_name: 'Nicholas D. Miller',
#   image_url: 'https://i.scdn.co/image/cb843e45099dccf0fa4d6f4071e82603843547cb'
# )

# Artist.create!(
#   stage_name: 'Lil Baby',
#   full_name: 'Dominique Armani Jones',
#   image_url: 'https://i.scdn.co/image/56b6de5bda0459783c9e59b06efa45a14904ad06'
# )

# Artist.create!(
#   stage_name: 'Bryson Tiller',
#   full_name: 'Bryson Djuan Tiller',
#   image_url: 'https://i.scdn.co/image/c65c74e7b7eb576b8dea4d5d43283ac279e3f87d'
# )

# Artist.create!(
#   stage_name: 'A Boogie wit da Hoodie',
#   full_name: 'Artist Julius Dubose',
#   image_url: 'https://i.scdn.co/image/c5624d93f38067845f2454189b0248cc0b4e69cf'
# )

# Artist.create!(
#   stage_name: 'Glass Animals',
#   full_name: 'Dave Bayley, Drew MacFarlane, Edmund Irwin-Singer, Joe Seaward',
#   image_url: 'https://i.scdn.co/image/f282504561b0c2b2ec74925793bbf132982e9098'
# )

# Artist.create!(
#   stage_name: 'Tame Impala',
#   full_name: 'Kevin Parker',
#   image_url: 'https://i.scdn.co/image/f8b1f2a47a920deb20fd3daf9031b2098b956e92'
# )

# puts "#{Artist.count} artists created!"