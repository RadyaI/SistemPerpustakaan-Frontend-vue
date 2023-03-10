import Vue from 'vue'
import VueRouter from 'vue-router'
import DashboardView from '../components/DashboardView.vue'
import UserView from '../components/UserView.vue'
import BukuView from '../components/BukuView.vue'
import TambahSiswa from '../components/crud_siswa/TambahSiswa.vue'
import TambahBuku from '../components/crud_buku/TambahBuku.vue'
import EditSiswa from '../components/crud_siswa/EditSiswa'
import EditBuku from '../components/crud_buku/EditBuku.vue'
import Peminjaman from '../components/TransaksiView.vue'
import detailpeminjaman from '../components/peminjaman/DetailPeminjaman.vue'
import tambahpinjam from '../components/peminjaman/TambahPeminjaman.vue'
import denda from '../components/peminjaman/DendaView.vue'
import history from '../components/peminjaman/HistoryView.vue'

Vue.use(VueRouter)
Vue.use(require('vue-moment'))

const routes = [
  {
    path: '/',
    name: 'DashboardView',
    component: DashboardView
  },
  {
    path: '/user',
    name: 'UserView',
    component: UserView
  },
  {
    path: '/buku',
    name: 'BukuView',
    component: BukuView
  },
  {
    path: '/tambahsiswa',
    name: 'TambahSiswa',
    component: TambahSiswa
  },
  {
    path: '/tambahbuku',
    name: 'TambahBuku',
    component: TambahBuku
  },
  {
    name: 'Edit',
    path: '/editsiswa/:id',
    component: EditSiswa,
    props: true
  },
  {
    name: 'EditBuku',
    path: '/editbuku/:id',
    component: EditBuku,
    props: true
  },
  {
    path: '/peminjaman',
    component: Peminjaman
  },
  {
    path: '/detailpeminjaman/:id',
    component: detailpeminjaman
  },
  {
    path: '/tambahpinjam',
    component: tambahpinjam
  },
  {
    path: '/denda',
    component: denda
  },
  {
    path: '/history',
    component: history
  }


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
