<template>
  <body>
    <header>
      <header-container>
        <div class="menu-container">
          <sidebar></sidebar>
          <div class="balance">
            <div class="balance-container">
              <div class="pocket">
                <div class="pocket-title">Новые заявки:</div>
                <div class="pockets">
                  <block-role></block-role>
                  <block-role></block-role>
                  <block-role></block-role>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header-container>
    </header>
  </body>
</template>
<script>
import blockRole from "@/components/block/blockRole.vue";
export default {
  data() {
    return {};
  },
  components: {
    blockRole,
  },
};
</script>
<style scoped>
body {
  background: rgb(17, 15, 22);
  height: 100vh;
}

.flex-for-btn {
  display: flex;
  align-items: center;
  justify-content: center;
}

.pocket-title {
  color: #fff;
  font-size: 30px;
  font-weight: 700;
}

.pocket {
  width: 95%;
  margin: auto;
}

.balance {
  padding-top: 100px;
  width: 85%;
  margin-left: 50px;
}

.balance-container {
  margin: auto;
}

.pockets {
  display: flex;
  align-items: center;
  padding-top: 40px;
  margin: auto;
  flex-wrap: wrap;
}

.pocket-block {
  text-align: center;
  background: #171d33;
  border-radius: 24.15px;
  padding: 35px;
  margin-right: 35px;
  margin-top: 25px;
}

.pocket-block-title {
  font-style: normal;
  font-weight: 500;
  font-size: 25px;
  line-height: 25px;
  color: #ffffff;
}

.pocket-block-minuts {
  font-style: normal;
  font-weight: 500;
  font-size: 23px;
  line-height: 25px;
  margin-top: 25px;
  color: #ffffff;
}

.pocket {
  margin-top: 100px;
}

.pocket-block-price {
  color: #0267ff;
  font-size: 35px;
  margin-top: 25px;
}

/* CSS */
.buy-btn {
  appearance: button;
  backface-visibility: hidden;
  background-color: #405cf5;
  border-radius: 6px;
  border-width: 0;
  box-shadow: rgba(50, 50, 93, 0.1) 0 0 0 1px inset,
    rgba(50, 50, 93, 0.1) 0 2px 5px 0, rgba(0, 0, 0, 0.07) 0 1px 1px 0;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue",
    Ubuntu, sans-serif;
  font-size: 100%;
  height: 44px;
  line-height: 1.15;
  outline: none;
  margin-top: 25px;
  font-size: 18px;
  overflow: hidden;
  padding: 0 25px;
  position: relative;
  font-weight: 700;
  text-align: center;
  text-transform: none;
  transform: translateZ(0);
  transition: all 0.2s, box-shadow 0.08s linear;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: 100%;
}

.buy-btn:hover {
  background-color: #6981b6;
}

.teach {
  padding-top: 70%;
}

.buy-btn:disabled {
  cursor: default;
}

.buy-btn:focus {
  box-shadow: rgba(50, 50, 93, 0.1) 0 0 0 1px inset,
    rgba(50, 50, 93, 0.2) 0 6px 15px 0, rgba(0, 0, 0, 0.1) 0 2px 2px 0,
    rgba(50, 151, 211, 0.3) 0 0 0 4px;
}

.balance-title {
  font-size: 24px;
  color: #fff;
  font-weight: 700;
}

.balance-inputs {
  margin-top: 30px;
  display: flex;
  width: 25%;
  flex-direction: column;
}

.minuts {
  padding: 10px;
  border: none;
  text-align: center;
  color: #000;
  width: 100%;
  margin-top: 20px;
  font-size: 16px;
}

.btn-hist {
  align-items: center;
  appearance: none;
  background-image: radial-gradient(
    100% 100% at 100% 0,
    #5adaff 0,
    #5468ff 100%
  );
  border: 0;
  border-radius: 6px;
  box-shadow: rgba(45, 35, 66, 0.4) 0 2px 4px,
    rgba(45, 35, 66, 0.3) 0 7px 13px -3px, rgba(58, 65, 111, 0.5) 0 -3px 0 inset;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  height: 48px;
  line-height: 1;
  list-style: none;
  overflow: hidden;
  margin-top: 20px;
  padding-left: 16px;
  padding-right: 16px;
  align-self: flex-end;
  position: relative;
  text-decoration: none;
  transition: box-shadow 0.15s, transform 0.15s;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;
  will-change: box-shadow, transform;
  font-size: 18px;
}

.btn-hist:focus {
  box-shadow: #3c4fe0 0 0 0 1.5px inset, rgba(45, 35, 66, 0.4) 0 2px 4px,
    rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #3c4fe0 0 -3px 0 inset;
}

.btn-hist:hover {
  box-shadow: rgba(45, 35, 66, 0.4) 0 4px 8px,
    rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #3c4fe0 0 -3px 0 inset;
  transform: translateY(-2px);
}

.btn-hist:active {
  box-shadow: #3c4fe0 0 3px 7px inset;
  transform: translateY(2px);
}

.menu-container {
  display: flex;
}

.w3-sidebar {
  background-color: rgb(24, 23, 28);
  z-index: 1;
  top: 0;
  left: 0;
  overflow-x: hidden;
  width: 15%;
  padding: 25px;
  height: 100vh;
}

router-link a {
  text-decoration: none !important;
}

@media (max-width: 2560px) {
}

@media (max-width: 1500px) {
}

@media (max-width: 1200px) {
  .nav-link span {
    display: none;
  }

  .nav {
    align-items: center;
  }

  .w3-sidebar {
    background-color: rgb(24, 23, 28);
    padding-right: 15px;
  }
}

@media (max-width: 900px) {
  .teach {
    display: none;
  }

  .work-container {
    margin-top: 40px;
  }

  .balance-inputs[data-v-ac034731] {
    width: 85%;
  }
}

@media (max-width: 600px) {
  .pockets {
    justify-content: center;
  }

  .logo-img {
    width: 60px;
    height: 90px;
  }

  .w3-sidebar {
    padding: 20px;
  }
}

@media (max-width: 400px) {
}
</style>
