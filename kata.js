/* Data kosakata bersama untuk index.html dan inggris.html.
   Format kata: [Inggris, Indonesia, gambar, cara baca]. Cara baca hanya perkiraan dalam ejaan Indonesia. */
window.KATA = {
  topics: [
    { id: 'salam', name: 'Salam', items: [
      ['Hello', 'Halo', '🙋', 'he-lou'], ['Hi', 'Hai', '👋', 'hai'], ['Good morning', 'Selamat pagi', '🌅', 'gud mor-ning'],
      ['Good afternoon', 'Selamat siang', '🌤️', 'gud af-ter-nun'], ['Good night', 'Selamat malam', '🌙', 'gud nait'],
      ['Goodbye', 'Sampai jumpa', '🚶', 'gud-bai'], ['Thank you', 'Terima kasih', '🙏', 'tenk yu'],
      ['Please', 'Tolong / silakan', '🤲', 'plis'], ['Sorry', 'Maaf', '😔', 'so-ri'] ] },
    { id: 'angka', name: 'Angka', text: true, items: [
      ['one', 'satu', '1', 'wan'], ['two', 'dua', '2', 'tu'], ['three', 'tiga', '3', 'tri'], ['four', 'empat', '4', 'for'], ['five', 'lima', '5', 'faiv'],
      ['six', 'enam', '6', 'siks'], ['seven', 'tujuh', '7', 'se-ven'], ['eight', 'delapan', '8', 'eit'], ['nine', 'sembilan', '9', 'nain'], ['ten', 'sepuluh', '10', 'ten'] ] },
    { id: 'warna', name: 'Warna', items: [
      ['red', 'merah', '🔴', 'red'], ['blue', 'biru', '🔵', 'blu'], ['green', 'hijau', '🟢', 'grin'], ['yellow', 'kuning', '🟡', 'ye-lou'],
      ['orange', 'jingga', '🟠', 'o-rinj'], ['purple', 'ungu', '🟣', 'per-pel'], ['brown', 'cokelat', '🟤', 'braun'],
      ['black', 'hitam', '⚫', 'blek'], ['white', 'putih', '⚪', 'wait'] ] },
    { id: 'hewan', name: 'Hewan', items: [
      ['cat', 'kucing', '🐱', 'ket'], ['dog', 'anjing', '🐶', 'dog'], ['bird', 'burung', '🐦', 'berd'], ['fish', 'ikan', '🐟', 'fisy'],
      ['cow', 'sapi', '🐄', 'kau'], ['duck', 'bebek', '🦆', 'dak'], ['horse', 'kuda', '🐴', 'hors'], ['rabbit', 'kelinci', '🐰', 're-bit'],
      ['monkey', 'monyet', '🐒', 'mang-ki'], ['elephant', 'gajah', '🐘', 'e-le-fen'], ['lion', 'singa', '🦁', 'lai-en'], ['frog', 'katak', '🐸', 'frog'] ] },
    { id: 'makanan', name: 'Buah & makanan', items: [
      ['apple', 'apel', '🍎', 'e-pel'], ['banana', 'pisang', '🍌', 'be-ne-ne'], ['orange', 'jeruk', '🍊', 'o-rinj'], ['grapes', 'anggur', '🍇', 'greips'],
      ['milk', 'susu', '🥛', 'milk'], ['bread', 'roti', '🍞', 'bred'], ['egg', 'telur', '🥚', 'eg'], ['rice', 'nasi', '🍚', 'rais'], ['water', 'air', '💧', 'wo-ter'] ] },
    { id: 'tubuh', name: 'Anggota tubuh', items: [
      ['face', 'wajah', '😀', 'feis'], ['eye', 'mata', '👁️', 'ai'], ['ear', 'telinga', '👂', 'ir'], ['nose', 'hidung', '👃', 'nous'],
      ['mouth', 'mulut', '👄', 'maus'], ['hand', 'tangan', '✋', 'hend'], ['leg', 'kaki (tungkai)', '🦵', 'leg'], ['foot', 'telapak kaki', '🦶', 'fut'] ] },
    { id: 'keluarga', name: 'Keluarga', items: [
      ['mother', 'ibu', '👩', 'ma-der'], ['father', 'ayah', '👨', 'fa-der'], ['sister', 'saudara perempuan', '👧', 'sis-ter'],
      ['brother', 'saudara laki-laki', '👦', 'bra-der'], ['grandmother', 'nenek', '👵', 'gren-ma-der'], ['grandfather', 'kakek', '👴', 'gren-fa-der'] ] },
    { id: 'sekolah', name: 'Benda di sekolah', items: [
      ['book', 'buku', '📖', 'buk'], ['pencil', 'pensil', '✏️', 'pen-sel'], ['pen', 'pulpen', '🖊️', 'pen'],
      ['bag', 'tas', '🎒', 'beg'], ['ruler', 'penggaris', '📏', 'ru-ler'], ['scissors', 'gunting', '✂️', 'si-zers'] ] },
    { id: 'hari', name: 'Nama hari', text: true, items: [
      ['Monday', 'Senin', 'Mon', 'man-dei'], ['Tuesday', 'Selasa', 'Tue', 'tius-dei'], ['Wednesday', 'Rabu', 'Wed', 'wens-dei'], ['Thursday', 'Kamis', 'Thu', 'ters-dei'],
      ['Friday', 'Jumat', 'Fri', 'frai-dei'], ['Saturday', 'Sabtu', 'Sat', 'se-ter-dei'], ['Sunday', 'Minggu', 'Sun', 'san-dei'] ] },
    { id: 'bulan', name: 'Nama bulan', text: true, items: [
      ['January', 'Januari', 'Jan', 'jen-yu-eri'], ['February', 'Februari', 'Feb', 'feb-ru-eri'], ['March', 'Maret', 'Mar', 'marc'], ['April', 'April', 'Apr', 'ei-pril'],
      ['May', 'Mei', 'May', 'mei'], ['June', 'Juni', 'Jun', 'jun'], ['July', 'Juli', 'Jul', 'ju-lai'], ['August', 'Agustus', 'Aug', 'o-gast'],
      ['September', 'September', 'Sep', 'sep-tem-ber'], ['October', 'Oktober', 'Oct', 'ok-tou-ber'], ['November', 'November', 'Nov', 'nou-vem-ber'], ['December', 'Desember', 'Dec', 'di-sem-ber'] ] },
    { id: 'cuaca', name: 'Cuaca', items: [
      ['sunny', 'cerah', '☀️', 'sa-ni'], ['rainy', 'hujan', '🌧️', 'rei-ni'], ['cloudy', 'berawan', '☁️', 'klau-di'], ['windy', 'berangin', '💨', 'win-di'],
      ['snowy', 'bersalju', '❄️', 'snou-i'], ['hot', 'panas', '🔥', 'hot'], ['cold', 'dingin', '🥶', 'kould'] ] },
    { id: 'perasaan', name: 'Perasaan', items: [
      ['happy', 'senang', '😀', 'he-pi'], ['sad', 'sedih', '😢', 'sed'], ['angry', 'marah', '😠', 'eng-gri'], ['sleepy', 'mengantuk', '😴', 'sli-pi'],
      ['hungry', 'lapar', '😋', 'hang-gri'], ['scared', 'takut', '😨', 'skerd'], ['tired', 'lelah', '🥱', 'tai-erd'] ] },
    { id: 'pakaian', name: 'Pakaian', items: [
      ['shirt', 'kemeja / baju', '👕', 'syert'], ['pants', 'celana', '👖', 'pens'], ['dress', 'gaun', '👗', 'dres'], ['shoes', 'sepatu', '👟', 'syus'],
      ['cap', 'topi', '🧢', 'kep'], ['socks', 'kaus kaki', '🧦', 'saks'], ['jacket', 'jaket', '🧥', 'je-ket'], ['glasses', 'kacamata', '👓', 'gle-sis'] ] },
    { id: 'kendaraan', name: 'Kendaraan', items: [
      ['car', 'mobil', '🚗', 'kar'], ['bus', 'bus', '🚌', 'bas'], ['train', 'kereta', '🚆', 'trein'], ['plane', 'pesawat', '✈️', 'plein'],
      ['ship', 'kapal besar', '🚢', 'syip'], ['bicycle', 'sepeda', '🚲', 'bai-si-kel'], ['motorcycle', 'sepeda motor', '🏍️', 'mou-ter-sai-kel'], ['boat', 'perahu', '⛵', 'bout'] ] },
    { id: 'rumah', name: 'Di rumah', items: [
      ['house', 'rumah', '🏠', 'haus'], ['door', 'pintu', '🚪', 'dor'], ['bed', 'tempat tidur', '🛏️', 'bed'], ['lamp', 'lampu', '💡', 'lemp'],
      ['key', 'kunci', '🔑', 'ki'], ['clock', 'jam', '🕒', 'klok'], ['television', 'televisi', '📺', 'te-le-vi-syen'], ['telephone', 'telepon', '☎️', 'te-le-foun'] ] },
    { id: 'kerja', name: 'Kata kerja', items: [
      ['run', 'berlari', '🏃', 'ran'], ['walk', 'berjalan', '🚶', 'wok'], ['jump', 'melompat', '🤸', 'jamp'], ['eat', 'makan', '🍽️', 'it'],
      ['drink', 'minum', '🥤', 'drink'], ['sleep', 'tidur', '😴', 'slip'], ['read', 'membaca', '📖', 'rid'], ['write', 'menulis', '✍️', 'rait'],
      ['sing', 'bernyanyi', '🎤', 'sing'], ['dance', 'menari', '💃', 'dens'], ['swim', 'berenang', '🏊', 'swim'], ['draw', 'menggambar', '🎨', 'dro'] ] },
    { id: 'sifat', name: 'Sifat', items: [
      ['big', 'besar', '🐘', 'big'], ['small', 'kecil', '🐜', 'smol'], ['tall', 'tinggi', '🦒', 'tol'], ['long', 'panjang', '🐍', 'long'],
      ['fast', 'cepat', '🐆', 'fest'], ['slow', 'lambat', '🐢', 'slou'], ['clean', 'bersih', '🧼', 'klin'], ['heavy', 'berat', '🏋️', 'he-vi'], ['beautiful', 'cantik / indah', '🌺', 'byu-ti-ful'] ] },
    { id: 'profesi', name: 'Pekerjaan', items: [
      ['teacher', 'guru', '👩‍🏫', 'ti-cer'], ['doctor', 'dokter', '👨‍⚕️', 'dok-ter'], ['nurse', 'perawat', '👩‍⚕️', 'ners'], ['farmer', 'petani', '👨‍🌾', 'far-mer'],
      ['police officer', 'polisi', '👮', 'po-lis o-fi-ser'], ['cook', 'juru masak', '👨‍🍳', 'kuk'], ['pilot', 'pilot', '🧑‍✈️', 'pai-lot'] ] },
    { id: 'tempat', name: 'Tempat', items: [
      ['school', 'sekolah', '🏫', 'skul'], ['hospital', 'rumah sakit', '🏥', 'hos-pi-tel'], ['market', 'pasar', '🏪', 'mar-ket'], ['park', 'taman', '🏞️', 'park'],
      ['beach', 'pantai', '🏖️', 'bic'], ['mosque', 'masjid', '🕌', 'mosk'], ['library', 'perpustakaan', '📚', 'lai-bre-ri'], ['farm', 'peternakan / kebun', '🚜', 'farm'] ] },
    { id: 'perintah', name: 'Perintah di kelas', items: [
      ['stand up', 'berdiri', '🧍', 'stend ap'], ['sit down', 'duduk', '🪑', 'sit daun'], ['open your book', 'buka bukumu', '📖', 'ou-pen yor buk'], ['close your book', 'tutup bukumu', '📕', 'klous yor buk'],
      ['listen', 'dengarkan', '👂', 'li-sen'], ['look', 'lihat', '👀', 'luk'], ['write', 'tulis', '✏️', 'rait'], ['be quiet', 'tenang', '🤫', 'bi kwai-et'],
      ['raise your hand', 'angkat tangan', '🙋', 'reiz yor hend'], ['clap your hands', 'tepuk tangan', '👏', 'klep yor hendz'] ] }
  ],

  /* huruf: [huruf, nama huruf (untuk suara), kata contoh, arti, gambar] */
  letters: [
    ['A', 'ay', 'apple', 'apel', '🍎'], ['B', 'bee', 'ball', 'bola', '⚽'], ['C', 'see', 'cat', 'kucing', '🐱'], ['D', 'dee', 'dog', 'anjing', '🐶'],
    ['E', 'ee', 'egg', 'telur', '🥚'], ['F', 'eff', 'fish', 'ikan', '🐟'], ['G', 'jee', 'grapes', 'anggur', '🍇'], ['H', 'aitch', 'hat', 'topi', '🎩'],
    ['I', 'eye', 'ice cream', 'es krim', '🍦'], ['J', 'jay', 'juice', 'jus', '🧃'], ['K', 'kay', 'key', 'kunci', '🔑'], ['L', 'el', 'lion', 'singa', '🦁'],
    ['M', 'em', 'moon', 'bulan', '🌙'], ['N', 'en', 'nose', 'hidung', '👃'], ['O', 'oh', 'orange', 'jeruk', '🍊'], ['P', 'pee', 'pig', 'babi', '🐷'],
    ['Q', 'cue', 'queen', 'ratu', '👸'], ['R', 'ar', 'rabbit', 'kelinci', '🐰'], ['S', 'ess', 'sun', 'matahari', '☀️'], ['T', 'tee', 'tree', 'pohon', '🌳'],
    ['U', 'you', 'umbrella', 'payung', '☂️'], ['V', 'vee', 'van', 'mobil boks', '🚐'], ['W', 'double you', 'watermelon', 'semangka', '🍉'], ['X', 'ex', 'fox', 'rubah (x di akhir)', '🦊'],
    ['Y', 'why', 'yellow', 'kuning', '🟡'], ['Z', 'zee', 'zebra', 'zebra', '🦓']
  ],

  /* percakapan: setiap baris [pembicara, Inggris, Indonesia] */
  dialogs: [
    { id: 'kenalan', title: 'Berkenalan', lines: [
      ['A', 'Hello! What is your name?', 'Halo! Siapa namamu?'], ['B', 'My name is Budi. What is your name?', 'Namaku Budi. Siapa namamu?'],
      ['A', 'My name is Sari.', 'Namaku Sari.'], ['B', 'Nice to meet you.', 'Senang bertemu denganmu.'], ['A', 'Nice to meet you, too.', 'Aku juga senang bertemu denganmu.'] ] },
    { id: 'kabar', title: 'Apa kabar?', lines: [
      ['A', 'Good morning!', 'Selamat pagi!'], ['B', 'Good morning! How are you?', 'Selamat pagi! Apa kabar?'],
      ['A', 'I am fine, thank you. And you?', 'Aku baik, terima kasih. Dan kamu?'], ['B', 'I am fine, too.', 'Aku juga baik.'] ] },
    { id: 'kelas', title: 'Di kelas', lines: [
      ['Teacher', 'Good morning, class.', 'Selamat pagi, anak-anak.'], ['Student', 'Good morning, Teacher.', 'Selamat pagi, Bu Guru.'],
      ['Teacher', 'Please open your books.', 'Silakan buka bukumu.'], ['Student', 'Yes, Teacher.', 'Baik, Bu Guru.'], ['Teacher', 'Thank you.', 'Terima kasih.'] ] },
    { id: 'makan', title: 'Suka makan apa?', lines: [
      ['A', 'Do you like apples?', 'Apakah kamu suka apel?'], ['B', 'Yes, I do.', 'Ya, aku suka.'],
      ['A', 'Do you like bananas?', 'Apakah kamu suka pisang?'], ['B', 'No, I do not.', 'Tidak, aku tidak suka.'] ] },
    { id: 'warna', title: 'Warna', lines: [
      ['A', 'What color is it?', 'Warna apa itu?'], ['B', 'It is red.', 'Itu merah.'],
      ['A', 'Do you like red?', 'Apakah kamu suka merah?'], ['B', 'Yes, I like red.', 'Ya, aku suka merah.'] ] },
    { id: 'keluarga', title: 'Keluargaku', lines: [
      ['A', 'Who is she?', 'Siapa dia (perempuan)?'], ['B', 'She is my mother.', 'Dia ibuku.'],
      ['A', 'Who is he?', 'Siapa dia (laki-laki)?'], ['B', 'He is my father.', 'Dia ayahku.'] ] }
  ],

  /* cerita pendek: lines [Inggris, Indonesia]; qs [pertanyaan, arti pertanyaan, jawaban benar, [jawaban salah]] */
  stories: [
    { id: 'cat', title: 'My Cat', emoji: '🐱', lines: [
      ['I have a cat.', 'Aku punya seekor kucing.'], ['Her name is Mimi.', 'Namanya Mimi.'], ['Mimi is small and white.', 'Mimi kecil dan putih.'],
      ['She likes milk.', 'Dia suka susu.'], ['I love my cat.', 'Aku sayang kucingku.'] ],
      qs: [['What is the cat’s name?', 'Siapa nama kucing itu?', 'Mimi', ['Pus', 'Tom']], ['What color is Mimi?', 'Apa warna Mimi?', 'white', ['black', 'brown']]] },
    { id: 'market', title: 'At the Market', emoji: '🛒', lines: [
      ['Mom and I go to the market.', 'Ibu dan aku pergi ke pasar.'], ['We buy three apples.', 'Kami membeli tiga apel.'], ['We buy two bananas.', 'Kami membeli dua pisang.'],
      ['The apples are red.', 'Apelnya berwarna merah.'], ['We go home.', 'Kami pulang.'] ],
      qs: [['How many apples do they buy?', 'Berapa apel yang mereka beli?', 'three', ['two', 'five']], ['What color are the apples?', 'Apa warna apelnya?', 'red', ['green', 'yellow']]] },
    { id: 'family', title: 'My Family', emoji: '👪', lines: [
      ['This is my family.', 'Ini keluargaku.'], ['My father is tall.', 'Ayahku tinggi.'], ['My mother is kind.', 'Ibuku baik hati.'],
      ['I have one sister.', 'Aku punya satu saudara perempuan.'], ['We are happy.', 'Kami bahagia.'] ],
      qs: [['Who is tall?', 'Siapa yang tinggi?', 'father', ['mother', 'sister']], ['How many sisters do I have?', 'Berapa saudara perempuanku?', 'one', ['two', 'three']]] },
    { id: 'rain', title: 'A Rainy Day', emoji: '🌧️', lines: [
      ['It is rainy today.', 'Hari ini hujan.'], ['I take my umbrella.', 'Aku membawa payungku.'], ['I wear my jacket.', 'Aku memakai jaketku.'],
      ['I go to school by bus.', 'Aku pergi ke sekolah naik bus.'], ['I am dry and happy.', 'Aku kering dan senang.'] ],
      qs: [['How is the weather?', 'Bagaimana cuacanya?', 'rainy', ['sunny', 'windy']], ['How do I go to school?', 'Aku pergi ke sekolah naik apa?', 'by bus', ['by car', 'by bike']]] },
    { id: 'zoo', title: 'At the Zoo', emoji: '🦁', lines: [
      ['We go to the zoo.', 'Kami pergi ke kebun binatang.'], ['I see a big elephant.', 'Aku melihat seekor gajah besar.'], ['I see a small monkey.', 'Aku melihat seekor monyet kecil.'],
      ['The monkey eats a banana.', 'Monyet itu makan pisang.'], ['I like the zoo.', 'Aku suka kebun binatang.'] ],
      qs: [['What does the monkey eat?', 'Apa yang dimakan monyet?', 'a banana', ['an apple', 'bread']], ['Which animal is big?', 'Hewan mana yang besar?', 'the elephant', ['the monkey', 'the frog']]] },
    { id: 'bag', title: 'My School Bag', emoji: '🎒', lines: [
      ['This is my school bag.', 'Ini tas sekolahku.'], ['It is blue.', 'Tasnya biru.'], ['I have two books.', 'Aku punya dua buku.'],
      ['I have a pencil and a ruler.', 'Aku punya pensil dan penggaris.'], ['I go to school on Monday.', 'Aku pergi ke sekolah pada hari Senin.'] ],
      qs: [['What color is the bag?', 'Apa warna tasnya?', 'blue', ['red', 'green']], ['How many books do I have?', 'Berapa buku yang kupunya?', 'two', ['one', 'three']]] }
  ],

  /* kalimat untuk disusun: [Inggris, Indonesia] */
  sentences: [
    ['I have a cat.', 'Aku punya seekor kucing.'], ['I like apples.', 'Aku suka apel.'], ['This is my mother.', 'Ini ibuku.'], ['The ball is red.', 'Bolanya berwarna merah.'],
    ['I see a bird.', 'Aku melihat seekor burung.'], ['She is happy.', 'Dia (perempuan) senang.'], ['He is my brother.', 'Dia (laki-laki) saudara laki-lakiku.'], ['I eat bread.', 'Aku makan roti.'],
    ['It is sunny today.', 'Hari ini cerah.'], ['We go to school.', 'Kami pergi ke sekolah.'], ['The dog is big.', 'Anjing itu besar.'], ['I drink milk.', 'Aku minum susu.'],
    ['Open your book.', 'Buka bukumu.'], ['I have two pencils.', 'Aku punya dua pensil.'], ['Good morning, Teacher.', 'Selamat pagi, Bu Guru.'], ['My name is Budi.', 'Namaku Budi.'],
    ['The fish is small.', 'Ikan itu kecil.'], ['I like blue.', 'Aku suka warna biru.'], ['Today is Monday.', 'Hari ini hari Senin.'], ['Thank you, Mom.', 'Terima kasih, Bu.'],
    ['What is your name?', 'Siapa namamu?'], ['How are you?', 'Apa kabar?'], ['Do you like apples?', 'Apakah kamu suka apel?'], ['Where is my bag?', 'Di mana tasku?'],
    ['I am a student.', 'Aku seorang murid.'], ['The cat is on the bed.', 'Kucing itu ada di atas tempat tidur.']
  ],

  /* tata bahasa mini: rule dalam bahasa Indonesia; examples [Inggris, Indonesia]; items [kalimat dengan ___, pilihan, jawaban, petunjuk] */
  grammar: [
    { id: 'aan', title: 'a atau an',
      rule: 'Pakai "an" sebelum kata yang diawali bunyi a, i, u, e, o. Selain itu pakai "a".',
      examples: [['a cat', 'seekor kucing'], ['a dog', 'seekor anjing'], ['an apple', 'sebuah apel'], ['an egg', 'sebutir telur']],
      items: [
        ['___ cat', ['a', 'an'], 'a', 'cat diawali huruf c, bukan huruf hidup.'], ['___ apple', ['a', 'an'], 'an', 'apple diawali huruf a, jadi pakai an.'],
        ['___ egg', ['a', 'an'], 'an', 'egg diawali huruf e, jadi pakai an.'], ['___ dog', ['a', 'an'], 'a', 'dog diawali huruf d, jadi pakai a.'],
        ['___ orange', ['a', 'an'], 'an', 'orange diawali huruf o, jadi pakai an.'], ['___ book', ['a', 'an'], 'a', 'book diawali huruf b, jadi pakai a.'],
        ['___ elephant', ['a', 'an'], 'an', 'elephant diawali huruf e, jadi pakai an.'], ['___ banana', ['a', 'an'], 'a', 'banana diawali huruf b, jadi pakai a.'],
        ['___ umbrella', ['a', 'an'], 'an', 'umbrella diawali huruf u, jadi pakai an.'], ['___ pencil', ['a', 'an'], 'a', 'pencil diawali huruf p, jadi pakai a.'] ] },
    { id: 'jamak', title: 'Satu dan banyak',
      rule: 'Untuk lebih dari satu, kebanyakan kata ditambah -s. Kata yang berakhir s, x, ch, atau sh ditambah -es.',
      examples: [['one cat, two cats', 'satu kucing, dua kucing'], ['one book, two books', 'satu buku, dua buku'], ['one bus, two buses', 'satu bus, dua bus'], ['one box, two boxes', 'satu kotak, dua kotak']],
      items: [
        ['one cat, two ___', ['cats', 'cates', 'cat'], 'cats', 'Tambahkan -s di belakang cat.'], ['one dog, two ___', ['dogs', 'doges', 'dog'], 'dogs', 'Tambahkan -s di belakang dog.'],
        ['one book, two ___', ['books', 'bookes', 'book'], 'books', 'Tambahkan -s di belakang book.'], ['one apple, three ___', ['apples', 'applees', 'apple'], 'apples', 'Tambahkan -s di belakang apple.'],
        ['one bus, two ___', ['buses', 'buss', 'bus'], 'buses', 'bus berakhir huruf s, jadi tambahkan -es.'], ['one box, two ___', ['boxes', 'boxs', 'box'], 'boxes', 'box berakhir huruf x, jadi tambahkan -es.'],
        ['one egg, four ___', ['eggs', 'egges', 'egg'], 'eggs', 'Tambahkan -s di belakang egg.'], ['one pencil, five ___', ['pencils', 'pencilles', 'pencil'], 'pencils', 'Tambahkan -s di belakang pencil.'] ] },
    { id: 'thisthat', title: 'This dan that',
      rule: '"This" untuk benda yang dekat denganmu. "That" untuk benda yang jauh darimu.',
      examples: [['This is a cat.', 'Ini seekor kucing. (dekat)'], ['That is a bird.', 'Itu seekor burung. (jauh)'], ['This is my book.', 'Ini bukuku. (dekat)'], ['That is my school.', 'Itu sekolahku. (jauh)']],
      items: [
        ['(dekat) ___ is a cat.', ['This', 'That'], 'This', 'Bendanya dekat, jadi pakai this.'], ['(jauh) ___ is a bird.', ['This', 'That'], 'That', 'Bendanya jauh, jadi pakai that.'],
        ['(dekat) ___ is my book.', ['This', 'That'], 'This', 'Bendanya dekat, jadi pakai this.'], ['(jauh) ___ is a plane.', ['This', 'That'], 'That', 'Bendanya jauh, jadi pakai that.'],
        ['(dekat) ___ is a pencil.', ['This', 'That'], 'This', 'Bendanya dekat, jadi pakai this.'], ['(jauh) ___ is my house.', ['This', 'That'], 'That', 'Bendanya jauh, jadi pakai that.'] ] },
    { id: 'tobe', title: 'I am, you are, she is',
      rule: 'I memakai am. You, we, they memakai are. He, she, it, dan nama satu orang memakai is.',
      examples: [['I am happy.', 'Aku senang.'], ['You are my friend.', 'Kamu temanku.'], ['She is my sister.', 'Dia saudara perempuanku.'], ['They are at school.', 'Mereka ada di sekolah.']],
      items: [
        ['I ___ happy.', ['am', 'is', 'are'], 'am', 'I selalu berpasangan dengan am.'], ['You ___ my friend.', ['am', 'is', 'are'], 'are', 'You berpasangan dengan are.'],
        ['She ___ my sister.', ['am', 'is', 'are'], 'is', 'She berpasangan dengan is.'], ['He ___ tall.', ['am', 'is', 'are'], 'is', 'He berpasangan dengan is.'],
        ['We ___ at school.', ['am', 'is', 'are'], 'are', 'We berpasangan dengan are.'], ['They ___ my friends.', ['am', 'is', 'are'], 'are', 'They berpasangan dengan are.'],
        ['It ___ a cat.', ['am', 'is', 'are'], 'is', 'It berpasangan dengan is.'], ['My mother ___ kind.', ['am', 'is', 'are'], 'is', 'Satu orang (my mother) memakai is.'] ] },
    { id: 'have', title: 'Have dan has',
      rule: 'I, you, we, they memakai have. He, she, it, dan nama satu orang memakai has.',
      examples: [['I have a cat.', 'Aku punya kucing.'], ['She has a ball.', 'Dia punya bola.'], ['We have two books.', 'Kami punya dua buku.'], ['My brother has a bike.', 'Saudaraku punya sepeda.']],
      items: [
        ['I ___ a cat.', ['have', 'has'], 'have', 'I memakai have.'], ['She ___ a ball.', ['have', 'has'], 'has', 'She memakai has.'],
        ['You ___ a pencil.', ['have', 'has'], 'have', 'You memakai have.'], ['He ___ a bag.', ['have', 'has'], 'has', 'He memakai has.'],
        ['We ___ two books.', ['have', 'has'], 'have', 'We memakai have.'], ['My brother ___ a bike.', ['have', 'has'], 'has', 'Satu orang (my brother) memakai has.'],
        ['They ___ apples.', ['have', 'has'], 'have', 'They memakai have.'] ] }
  ]
};
