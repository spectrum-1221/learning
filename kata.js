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
      ['key', 'kunci', '🔑', 'ki'], ['clock', 'jam', '🕒', 'klok'], ['television', 'televisi', '📺', 'te-le-vi-syen'], ['telephone', 'telepon', '☎️', 'te-le-foun'] ] }
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
  ]
};
