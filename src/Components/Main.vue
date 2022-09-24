<template>
  <div class="flex flex-col md:flex-row">
    <nav aria-label="alternative nav">
      <div class="bg-gray-800 shadow-xl h-20 fixed bottom-0 mt-12 md:relative md:h-screen z-10 w-full md:w-48 content-center">

        <div class="md:mt-12 md:w-48 md:fixed md:left-0 md:top-0 content-center md:content-start text-left justify-between">
          <ul class="list-reset flex flex-row md:flex-col pt-3 md:py-3 px-1 md:px-2 text-center md:text-left">
            <li class="mr-3 flex-1">
              <a class="block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-pink-500">
                <i class="fas fa-tasks pr-0 md:pr-3"></i><span class="pb-1 md:pb-0 text-xs md:text-base text-gray-400 md:text-gray-200 block md:inline-block">Người Dùng</span>
              </a>
            </li>
            <li class="mr-3 flex-1">
              <a class="block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-purple-500">
                <i class="fa fa-envelope pr-0 md:pr-3"></i><span class="pb-1 md:pb-0 text-xs md:text-base text-gray-400 md:text-gray-200 block md:inline-block">Bài Đăng</span>
              </a>
            </li>
            <li class="mr-3 flex-1">
              <a class="block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-blue-600">
                <i class="fas fa-chart-area pr-0 md:pr-3 text-blue-600"></i><span class="pb-1 md:pb-0 text-xs md:text-base text-white md:text-white block md:inline-block">Tổng Quan </span>
              </a>
            </li>
            <li class="mr-3 flex-1">
              <a  class="block py-1 md:py-3 pl-0 md:pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-red-500">
                <i class="fa fa-wallet pr-0 md:pr-3"></i><span class="pb-1 md:pb-0 text-xs md:text-base text-gray-400 md:text-gray-200 block md:inline-block">Phản hồi tố cáo</span>
              </a>
              <!--              fix lai thanh button cho no dep -->
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <section>
      <div id="main" class="main-content flex-1 bg-gray-100 mt-12 md:mt-2 pb-24 md:pb-5">

        <div class="bg-gray-800 pt-3">
          <div class="rounded-tl-3xl bg-gradient-to-r from-blue-900 to-gray-800 p-4 shadow text-2xl text-white">
            <h1 class="font-bold pl-2">Analytics</h1>
          </div>
        </div>

        <div class="flex flex-wrap">
          <div class="w-full md:w-1/2 xl:w-1/3 p-6">
            <!--Metric Card-->
            <div class="bg-gradient-to-b from-green-200 to-green-100 border-b-4 border-green-600 rounded-lg shadow-xl p-5">
              <div class="flex flex-row items-center">
                <div class="flex-shrink pr-4">
                  <div class="rounded-full p-5 bg-green-600"><i class="fa fa-wallet fa-2x fa-inverse"></i></div>
                </div>
                <div class="flex-1 text-right md:text-center">
                  <h2 class="font-bold uppercase text-gray-600">Tổng số người dùng</h2>
                  <p class="font-bold text-3xl"> 57 <span class="text-green-500"><i class="fas fa-caret-up"></i></span></p>
                </div>
              </div>
            </div>
            <!--/Metric Card-->
          </div>
          <div class="w-full md:w-1/2 xl:w-1/3 p-6">
            <!--Metric Card-->
            <div class="bg-gradient-to-b from-blue-200 to-blue-100 border-b-4 border-pink-500 rounded-lg shadow-xl p-5">
              <div class="flex flex-row items-center">
                <div class="flex-shrink pr-4">
                  <div class="rounded-full p-5 bg-pink-600"><i class="fas fa-users fa-2x fa-inverse"></i></div>
                </div>
                <div class="flex-1 text-right md:text-center">
                  <h2 class="font-bold uppercase text-gray-600">người dùng hoạt động</h2>
                  <p class="font-bold text-3xl">7 <span class="text-pink-500"><i class="fas fa-exchange-alt"></i></span></p>
                </div>
              </div>
            </div>
            <!--/Metric Card-->
          </div>
          <div class="w-full md:w-1/2 xl:w-1/3 p-6">
            <!--Metric Card-->
            <div class="bg-gradient-to-b from-red-200 to-red-100 border-b-4 border-yellow-600 rounded-lg shadow-xl p-5">
              <div class="flex flex-row items-center">
                <div class="flex-shrink pr-4">
                  <div class="rounded-full p-5 bg-yellow-600"><i class="fas fa-user-plus fa-2x fa-inverse"></i></div>
                </div>
                <div class="flex-1 text-right md:text-center">
                  <h2 class="font-bold uppercase text-gray-600">Người dùng đã ban</h2>
                  <p class="font-bold text-3xl">2 <span class="text-yellow-600"><i class="fas fa-caret-up"></i></span></p>
                </div>
              </div>
            </div>
            <!--/Metric Card-->
          </div>
          <div class="w-full md:w-1/2 xl:w-1/3 p-6">
            <!--Metric Card-->
            <div class="bg-gradient-to-b from-blue-200 to-blue-100 border-b-4 border-blue-500 rounded-lg shadow-xl p-5">
              <div class="flex flex-row items-center">
                <div class="flex-shrink pr-4">
                  <div class="rounded-full p-5 bg-blue-600"><i class="fas fa-server fa-2x fa-inverse"></i></div>
                </div>
                <div class="flex-1 text-right md:text-center">
                  <h2 class="font-bold uppercase text-gray-600">Số đơn tố cáo</h2>
                  <p class="font-bold text-3xl"> Comming Soon </p>
                </div>
              </div>
            </div>
            <!--/Metric Card-->
          </div>
          <div class="w-full md:w-1/2 xl:w-1/3 p-6">
            <!--Metric Card-->
            <div class="bg-gradient-to-b from-indigo-200 to-indigo-100 border-b-4 border-indigo-500 rounded-lg shadow-xl p-5">
              <div class="flex flex-row items-center">
                <div class="flex-shrink pr-4">
                  <div class="rounded-full p-5 bg-indigo-600"><i class="fas fa-tasks fa-2x fa-inverse"></i></div>
                </div>
                <div class="flex-1 text-right md:text-center">
                  <h2 class="font-bold uppercase text-gray-600">Số Phản hồi tố cáo</h2>
                  <p class="font-bold text-3xl">Cooming soon</p>
                </div>
              </div>
            </div>
            <!--/Metric Card-->
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "HomeMain"
}
</script>

<style scoped>

</style>