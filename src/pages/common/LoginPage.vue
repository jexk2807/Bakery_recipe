<template>
  <div class="bg-white shadow w-full font-roboto">

    <div class="flex justify-center h-screen">
      <!-- background -->
      <div class="hidden bg-cover lg:block lg:w-2/3" style="background-image: url(https://i.im.ge/2022/09/24/19GulW.bgr.png)" >
        <div class="backdrop-blur-sm	flex items-center h-full px-20 bg-gray-900 bg-opacity-60 	">
          <div>
            <h2 class="text-5xl font-bold text-white">Bakery Recipe</h2>
            <p class="text-xl max-w-xl mt-3 text-white">Chào mừng admin tới với trang quản trị</p>
          </div>
        </div>
      </div>
      <!--auth-size loggin -->
      <div class="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
        <div class="flex-1">
          <div class="-center">
            <img class="-center w-100 h-100" src="https://i.im.ge/2022/09/24/19JpK0.Thiet-ke-chua-co-ten.png"/>
          </div>

          <div class="mt-8">
            <form method="post">
              <!-- Email  -->
              <div class="mb-6">
                <input
                    type="text"
                    class="form-control block w-full px-4 py-2 text-lg text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="admin"
                />
              </div>

              <!-- Password  -->
              <div class="mb-6">
                <input

                    type="password"
                    class="form-control block w-full px-4 py-2 text-lg text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="*********"
                />
              </div>

            <!--notification-->
              <p class="text-red-500 text-xs italic">không có pass đâu vào đi .</p>
              <!-- Submit -->
              <router-link to="/home">
                <button
                    type="submit"
                    class="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light">
                  ĐĂNG NHẬP
                </button>
              </router-link>

            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  components: {
  },
}
</script>

<style>

</style>