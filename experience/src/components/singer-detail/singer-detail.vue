<template>
    <transition name="slide">
        <!-- <div class="singer-detail" data-comp="歌手详情页组件">歌手详情页组件</div> -->
        <music-list :title="title" :bgImage="bgImage" :songs="songs"></music-list>
    </transition>
</template>

<script>
import {mapGetters} from 'vuex'
import {getSingerDetail} from 'api/singer'
import {ERR_OK} from 'api/config'
import {createSong} from 'common/js/song'
import musicList from 'components/music-list/music-list'

export default {
    name: 'singer-detail',
    data() {
        return {
            songs: []
        };
    },
    components: {
        musicList
    },
    created() {
        this._getDetail()
    },
    computed: {
        title() {
            return this.singer.name
        },
        bgImage() {
            return this.singer.avatar
        },
        ...mapGetters([
            'singer'
        ])
    },
    methods: {
        _getDetail() {
            getSingerDetail(this.singer.id).then( (res) => {
                if (res.code === ERR_OK) {
                    this.songs = this._normalizeSongs(res.data.list)
                    console.log(this.songs);
                }
            } )
        },
        _normalizeSongs(list) {
            let ret = []
            list.forEach((item, index) => {
                let {musicData} = item
                if (musicData.songid && musicData.albummid) {
                    ret.push(createSong(musicData))
                }
            })
            return ret
        }
    }
};
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import "~common/stylus/variable"
  .singer-detail
    position: fixed
    z-index: 100
    top: 0
    left: 0
    right: 0
    bottom: 0
    background-color: $color-background

  .slide-enter, .slide-leave-to
    transform: translate3d(100%, 0, 0)
  .slide-enter-active, .slide-leave-active
    transition: all .3s


</style>

