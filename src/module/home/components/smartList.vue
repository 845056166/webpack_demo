<template>
  <div class="container">
    <section class="main">
      <ul class="timeline">
        <li class="event" v-for="(item, index) in list" :key="index">
          <input type="radio" name="tl-group" :value="index" v-model="checked"/>
          <label></label>
          <div class="thumb user-4"><span>{{item.time}}</span></div>
          <div class="content-perspective">
            <div class="content">
              <div class="content-inner">
                <h3>{{item.title}}</h3>
                <p>{{item.desc}}</p>
              </div>
            </div>
          </div>
        </li>
        <!-- <li class="event">
          <input type="radio" name="tl-group" checked/>
          <label></label>
          <div class="thumb user-4"><span>01 Dec</span></div>
          <div class="content-perspective">
            <div class="content">
              <div class="content-inner">
                <h3>我找到了你</h3>
                <p>这是我们第一见面的日子</p>
              </div>
            </div>
          </div>
        </li>
        <li class="event">
          <input type="radio" name="tl-group"/>
          <label></label>
          <div class="thumb user-6"><span>02 Dec</span></div>
          <div class="content-perspective">
            <div class="content">
              <div class="content-inner">
                <h3>我去找你</h3>
                <p>这是我们单独见面的日子，这天晚上牵手👫成功</p>
              </div>
            </div>
          </div>
        </li>
        <li class="event">
          <input type="radio" name="tl-group"/>
          <label></label>
          <div class="thumb user-3"><span>17 Nov</span></div>
          <div class="content-perspective">
            <div class="content">
              <div class="content-inner">
                <h3>My brains are going into my feet! </h3>
                <p>We're done with you. Go back to the golf course and work on your putz. Nah, he got the upside, I got the downside. See there's two sides to every Schwartz.  What's the matter with this thing, what's all that churnning and bubbling, you call that radar screen? Ah, planet Druidia. And under that air shield, ten thousand years of fresh air. We must get through that air shield! Say goodbye to your two best friends, and I don't mean your pals in the Winnebago. So, Lone Star, now you see that evil will always triumph because good is dumb. </p>
              </div>
            </div>
          </div>
        </li>
        <li class="event">
          <input type="radio" name="tl-group"/>
          <label></label>
          <div class="thumb user-5"><span>16 Nov</span></div>
          <div class="content-perspective">
            <div class="content">
              <div class="content-inner">
                <h3>Would you please stop calling me that?</h3>
                <p>You make it so difficult sometimes. You have your moments. Not many of them, but you do have them. You're not actually going IN to an asteroid field? I happen to like nice men. This bucket of bolts's never gonna get us past that blockade. We're going to get pulverized if we stay out here much longer. Evacuate remaining ground staff.</p>
              </div>
            </div>
          </div>
        </li>
        <li class="event">
          <input type="radio" name="tl-group"/>
          <label></label>
          <div class="thumb user-2"><span>15 Nov</span></div>
          <div class="content-perspective">
            <div class="content">
              <div class="content-inner">
                <h3>Funny, she doesn't look Druish</h3>
                <p>It's not that we're afraid, far from it, it's just that we've got this thing about death... It's not us! I'm a mog: half man, half dog. I'm my own best friend! The minute we move in they're gonna spot us on their radar. Whoa, hold it, time. Chief... I can't... I can't go any further. I can't go any further. </p>
              </div>
            </div>
          </div>
        </li>
        <div >
        </div>
        <li class="event">
          <input type="radio" name="tl-group"/>
          <label></label>
          <div class="thumb user-7"><span>14 Nov</span></div>
          <div class="content-perspective">
            <div class="content">
              <div class="content-inner">
                <h3>Ouch! Pay attention to what you're doing! </h3>
                <p>Artoo says that the chances of survival are 725 to 1. Actually Artoo has been known to make mistakes... from time to time... Oh dear...The odds of successfully surviving an attack on an Imperial Star Destroyer are approximately... Sir, it's quite possible this asteroid is not entirely stable. Oh. They've encased him in Carbonite. He should be quite well protected. If he survived the freezing process, that is. If I may say so, sir, I noticed earlier the hyperdrive motivator has been damaged. It's impossible to go to lightspeed. Stupid little short-circuit! He'll be *quite* all right. </p>
              </div>
            </div>
          </div>
        </li>
        <li class="event">
          <input type="radio" name="tl-group"/>
          <label></label>
          <div class="thumb user-1"><span></span></div>
          <div class="content-perspective">
            <div class="content">
              <div class="content-inner">
                <h3>Rhhhnn gggnn. Garrrrr!</h3>
                <p>Rrrrrrr rrrraaaahhh rrrrrrggghhhhnn! Arrrggghhnnn. Grrrhn. Gahr. Rrrrrrr rrrraaaahhh rrrrrrggghhhhnn! Grrf. Arrrggghhnnn. Grrrhn. Gahr. Grrrhn. Gahr. Rrrrrrr rrrraaaahhh rrrrrrggghhhhnn! Gahr. Gahr. Arrrggghhnnn. Grrrhn.</p>
              </div>
            </div>
          </div>
        </li>
        <li class="event">
          <input type="radio" name="tl-group"/>
          <label></label>
          <div class="thumb user-8"><span>12 Nov</span></div>
          <div class="content-perspective">
            <div class="content">
              <div class="content-inner">
                <h3>I hope it's for adult dating</h3>
                <p>Can we talk? OK, we all know Prince Valium is a pill. But you could have married him for your father's sake and had a headache for the next 25 years. Well, goodbye virgin alarm. Besides he got a sexy voice. He might be cute. Hey wait, you forgot to get married! And if we go over our pagecount, the network will kill us. You know, you've got a very unique voice. You should be in silent films.</p>
              </div>
            </div>
          </div>
        </li> -->
      </ul>
    </section>
  </div>
</template>
<script>
export default {
    props: {
      list: {
        type: Array,
        default: () => [
          {
            time: '01 Dec',
            title: '我发现了你',
            desc: '那是我们第一次见面',
          },
          {
            time: '01 Dec',
            title: '我发现了你',
            desc: '那是我们第一次见面',
          },
          {
            time: '01 Dec',
            title: '我发现了你',
            desc: '那是我们第一次见面',
          },
          {
            time: '01 Dec',
            title: '我发现了你',
            desc: '那是我们第一次见面',
          },
        ],
      },
    },
    data() {
      return {
        checked: '0',
      }
    }
}
</script>
<style lang="scss" scoped>
@import '../assets/css/lanrenzhijia.css';

</style>