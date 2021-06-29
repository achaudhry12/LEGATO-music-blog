# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Song.destroy_all
Artist.destroy_all
User.destroy_all

@user = User.create!(
  username: 'admin',
  email: 'admin@loon.com',
  password: 'loon123'
)

puts "#{User.count} users created!"

@post = Artist.create!(
  stage_name: 'Post Malone',
  full_name: 'Austin Richard Post',
  image_url: 'https://i.scdn.co/image/93fec27f9aac86526b9010e882037afbda4e3d5f',
  user: @user
)

@growlers = Artist.create!(
  stage_name: 'The Growlers',
  full_name: 'Brooks Nielsen, Kyle Straka, Brad Bowers, Richard Gowen',
  image_url: 'https://i.scdn.co/image/83bf768c4e19fc222bccf05b45e149581bc72bdb',
  user: @user
)

@adventure = Artist.create!(
  stage_name: 'Adventure Club',
  full_name: 'Christian Srigley, Leighton James',
  image_url: 'https://i.scdn.co/image/7564bf3d72c31306de85faaaa97daa7958225bba',
  user: @user
)

@rush = Artist.create!(
  stage_name: 'Rush',
  full_name: 'Geddy Lee, Alex Lifeson, Neil Peart',
  image_url: 'https://i.scdn.co/image/6fdfa7c623d77d5900e69eef2443340e3493a4bf',
  user: @user
)

@queen = Artist.create!(
  stage_name: 'Queen',
  full_name: 'Freddie Mercury, Brain May, Roger Taylor, John Deacon',
  image_url: 'https://i.scdn.co/image/af2b8e57f6d7b5d43a616bd1e27ba552cd8bfd42',
  user: @user
)

@mozart = Artist.create!(
  stage_name: 'Mozart',
  full_name: 'Wolfgang Amadeus Mozart',
  image_url: 'https://www.biography.com/.image/t_share/MTE1ODA0OTcxNzMyNjY1ODY5/wolfgang-mozart-9417115-2-402.jpg',
  user: @user
)

@kshmr = Artist.create!(
  stage_name: 'KSHMR',
  full_name: 'Niles Hollowell-Dhar',
  image_url: 'https://i.scdn.co/image/827aa43e7c4ff41408c93a4598db908a34778309',
  user: @user
)

@oski = Artist.create!(
  stage_name: 'Oski',
  full_name: 'Oski',
  image_url: 'https://i.scdn.co/image/d7914fb7d6899f0ab747e6b04010945d04b2e91d',
  user: @user
)

@weeknd = Artist.create!(
  stage_name: 'The Weeknd',
  full_name: 'Abel Makkonen Tesfaye',
  image_url: 'https://i.scdn.co/image/37376dba0623c33923eae9d234e5e199b76d227f',
  user: @user
)

@tchami = Artist.create!(
  stage_name: 'Tchami',
  full_name: 'Martin Joseph Léonard Bresso',
  image_url: 'https://i.scdn.co/image/fba4beaa7999eea46e7a9ceab15633be4eeff977',
  user: @user
)

@coldplay = Artist.create!(
  stage_name: 'Coldplay',
  full_name: 'Chris Martin, Jonny Buckland, Guy Berryman, Will Champion',
  image_url: 'https://i.scdn.co/image/ab6761610000e5eb3bcd1c4d6f324498d3de6f8d',
  user: @user
)

@stevie = Artist.create!(
  stage_name: 'Stevie Wonder',
  full_name: 'Stevland Hardaway Morris',
  image_url: 'https://i.scdn.co/image/37c7875911b1d8195b05d40061a86bd01908a0d9',
  user: @user
)

@nas = Artist.create!(
  stage_name: 'Nas',
  full_name: 'Nasir bin Olu Dara Jones',
  image_url: 'https://i.scdn.co/image/f730419a55fac73c1b59e29ccf06600a56b11b39',
  user: @user
)

@lack = Artist.create!(
  stage_name: '6LACK',
  full_name: 'Ricardo Valdez Valentine Jr',
  image_url: 'https://i.scdn.co/image/b95bf1fcc0b3491a8623419548a69add9bb5812f',
  user: @user
)

@maude = Artist.create!(
  stage_name: 'Maude Latour',
  full_name: 'Maude Latour',
  image_url: 'https://i.scdn.co/image/751730f6596567198164052573670cc54b28e0ac',
  user: @user
)

@max = Artist.create!(
  stage_name: 'MAX',
  full_name: 'Maxwell George Schneider',
  image_url: 'https://i.scdn.co/image/ab67616d0000b273d48594c1f94e34eba9a1d490',
  user: @user
)

@strokes = Artist.create!(
  stage_name: 'The Strokes',
  full_name: 'Julian Casablancas, Nick Valensi, Albert Hammond Jr., Nikolai Fraiture, Fabrizio Moretti',
  image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/The_Strokes_by_Roger_Woolman.jpg/1200px-The_Strokes_by_Roger_Woolman.jpg',
  user: @user
)

@odesza = Artist.create!(
  stage_name: 'ODESZA',
  full_name: 'Harrison Mills, Clayton Knight',
  image_url: 'https://i.scdn.co/image/2d45e04208b55f434f31c6a46ee33e1693d23a9b',
  user: @user
)

@illenium = Artist.create!(
  stage_name: 'Illenium',
  full_name: 'Nicholas D. Miller',
  image_url: 'https://i.scdn.co/image/cb843e45099dccf0fa4d6f4071e82603843547cb',
  user: @user
)

@lilbaby = Artist.create!(
  stage_name: 'Lil Baby',
  full_name: 'Dominique Armani Jones',
  image_url: 'https://i.scdn.co/image/56b6de5bda0459783c9e59b06efa45a14904ad06',
  user: @user
)

@bryson = Artist.create!(
  stage_name: 'Bryson Tiller',
  full_name: 'Bryson Djuan Tiller',
  image_url: 'https://i.scdn.co/image/c65c74e7b7eb576b8dea4d5d43283ac279e3f87d',
  user: @user
)

@boogie = Artist.create!(
  stage_name: 'A Boogie wit da Hoodie',
  full_name: 'Artist Julius Dubose',
  image_url: 'https://i.scdn.co/image/c5624d93f38067845f2454189b0248cc0b4e69cf',
  user: @user
)

@glass = Artist.create!(
  stage_name: 'Glass Animals',
  full_name: 'Dave Bayley, Drew MacFarlane, Edmund Irwin-Singer, Joe Seaward',
  image_url: 'https://i.scdn.co/image/f282504561b0c2b2ec74925793bbf132982e9098',
  user: @user
)

@tame = Artist.create!(
  stage_name: 'Tame Impala',
  full_name: 'Kevin Parker',
  image_url: 'https://i.scdn.co/image/f8b1f2a47a920deb20fd3daf9031b2098b956e92',
  user: @user
)

puts "#{Artist.count} artists created!"

@postSong = Song.create!(
  name: 'Circles',
  release_date: 'August 30, 2019',
  link: 'https://www.youtube.com/watch?v=wXhTHyIgQ_U',
  artist: @post,
  user: @user
)

@growlersSong = Song.create!(
  name: 'Going Gets Tough',
  release_date: 'September 23, 2014',
  link: 'https://www.youtube.com/watch?v=_fL0vu1VwKQ',
  artist: @growlers,
  user: @user
)

@adventureSong = Song.create!(
  name: 'Gold (Ft. Yuna)',
  release_date: 'October 29, 2013',
  link: 'https://www.youtube.com/watch?v=qxiwWqWAa2I',
  artist: @adventure,
  user: @user
)

@rushSong = Song.create!(
  name: 'The Spirit of Radio',
  release_date: 'January 1, 1980',
  link: 'https://www.youtube.com/watch?v=g_QtO0Rhp0w',
  artist: @rush,
  user: @user
)

@queenSong = Song.create!(
  name: "Don't Stop Me Now",
  release_date: 'January 26, 1979',
  link: 'https://www.youtube.com/watch?v=HgzGwKwLmgM',
  artist: @queen,
  user: @user
)

@mozartSong = Song.create!(
  name: 'Overture – The Marriage of Figaro',
  release_date: 'May 1, 1786',
  link: 'https://www.youtube.com/watch?v=8mZMEVAlXm0&t',
  artist: @mozart,
  user: @user
)

@kshmrSong = Song.create!(
  name: 'Midnight Lion Walk',
  release_date: 'March 19, 2021',
  link: 'https://www.youtube.com/watch?v=Ed5LI5DxZ2I',
  artist: @kshmr,
  user: @user
)

@oskiSong = Song.create!(
  name: 'Go My Way (feat. The Arcturians)',
  release_date: 'May 16, 2017',
  link: 'https://www.youtube.com/watch?v=zt5Wug7sVmI',
  artist: @oski,
  user: @user
)

@weekndSong = Song.create!(
  name: 'Blinding Lights',
  release_date: 'November 29, 2019',
  link: 'https://www.youtube.com/watch?v=4NRXx6U8ABQ',
  artist: @weeknd,
  user: @user
)

@tchamiSong = Song.create!(
  name: 'Praise (feat. Gunna)',
  release_date: 'October 9, 2020',
  link: 'https://www.youtube.com/watch?v=fro3lapavWI',
  artist: @tchami,
  user: @user
)

@coldplaySong = Song.create!(
  name: 'Hymn for the Weekend',
  release_date: 'January 25, 2016',
  link: 'https://www.youtube.com/watch?v=YykjpeuMNEk',
  artist: @coldplay,
  user: @user
)

@stevieSong = Song.create!(
  name: "Signed, Sealed, Delivered (I'm Yours)",
  release_date: 'June 3, 1970',
  link: 'https://www.youtube.com/watch?v=pUj9frKY46E',
  artist: @stevie,
  user: @user
)

@nasSong = Song.create!(
  name: 'N.Y. State of Mind',
  release_date: 'April 19, 1994',
  link: 'https://www.youtube.com/watch?v=hI8A14Qcv68',
  artist: @nas,
  user: @user
)

@lackSong = Song.create!(
  name: 'PRBLMS',
  release_date: 'September 23, 2016',
  link: 'https://www.youtube.com/watch?v=fS9m0Ac8PCU',
  artist: @lack,
  user: @user
)

@maudeSong = Song.create!(
  name: 'One More Weekend',
  release_date: 'July 24, 2020',
  link: 'https://www.youtube.com/watch?v=XCel7NDgEUM',
  artist: @maude,
  user: @user
)

@maxSong = Song.create!(
  name: 'Love Me Less (feat. Quinn XCII)',
  release_date: 'April 5, 2019',
  link: 'https://www.youtube.com/watch?v=ZznsQjzlHIE',
  artist: @max,
  user: @user
)

@strokesSong = Song.create!(
  name: 'Reptilia',
  release_date: 'October 28, 2003',
  link: 'https://www.youtube.com/watch?v=b8-tXG8KrWs',
  artist: @strokes,
  user: @user
)

@Song = Song.create!(
  name: 'A Moment Apart',
  release_date: 'September 8, 2017',
  link: 'https://www.youtube.com/watch?v=xarC5jAiO7w',
  artist: @odesza,
  user: @user
)

@illeniumSong = Song.create!(
  name: 'Good Things Fall Apart (with Jon Bellion)',
  release_date: 'May 13, 2019',
  link: 'https://www.youtube.com/watch?v=XpmeVNxZ-Ks',
  artist: @illenium,
  user: @user
)

@lilbabyong = Song.create!(
  name: 'Drip Too Hard (Lil Baby & Gunna)',
  release_date: 'September 9, 2018',
  link: 'https://www.youtube.com/watch?v=_YzD9KW82sk',
  artist: @lilbaby,
  user: @user
)

@brysonSong = Song.create!(
  name: 'Exchange',
  release_date: 'September 21, 2015',
  link: 'https://www.youtube.com/watch?v=aj9coPGuFkM',
  artist: @bryson,
  user: @user
)

@boogieSong = Song.create!(
  name: 'Look Back at it',
  release_date: 'December 7, 2018',
  link: 'https://www.youtube.com/watch?v=DmNfT-B7nlA',
  artist: @boogie,
  user: @user
)

@glassSong = Song.create!(
  name: 'Heat Waves',
  release_date: 'June 29, 2020',
  link: 'https://www.youtube.com/watch?v=mRD0-GxqHVo',
  artist: @glass,
  user: @user
)

@tameSong = Song.create!(
  name: 'The Less I Know the Better',
  release_date: 'July 17, 2015',
  link: 'https://www.youtube.com/watch?v=2SUwOgmvzK4',
  artist: @tame,
  user: @user
)

puts "#{Song.count} songs created!"

