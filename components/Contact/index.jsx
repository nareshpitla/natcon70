import SectionTitle from "../Common/SectionTitle";
import NewsLatterBox from "./NewsLatterBox";

const Contact = () => {
  return (
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container">
      <SectionTitle
          title="Registration Details"
          paragraph=""
          center
          width="665px"
        />
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
            <div
              className="wow fadeInUp mb-12 rounded-md bg-primary/[3%] py-11 px-8 dark:bg-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              data-wow-delay=".15s
              "
            >
              <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
              Registration fee for conference              </h2>
              
<table className="min-w-full divide-y divide-gray-200">
<thead className="bg-gray-50">
                                <tr>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                    >
                                        Categories
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                    >
                                        Delegates
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                    >
                                        Post graduates & under Graduates


                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                                    >
                                        Associate delegates (Above 14 years)


                                    </th>
                                   
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                               

<tr>
<td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
<p>Early bird registration</p>
<p>(Up to 15<sup>th</sup> August 2023)</p>
</td>
<td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
<p>4000</p>
</td>
<td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
<p>3500</p>
</td>
<td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
<p>2000</p>
</td>
</tr>
<tr>
<td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
<p>Registration with late fees (Up to 15<sup>th</sup> October 2023)</p>
</td>
<td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
<p>4800</p>
</td>
<td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
<p>3800</p>
</td>
<td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
<p>2000</p>
</td>
</tr>
<tr>
<td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
<p>Spot registration</p>
</td>
<td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
<p>5500</p>
</td>
<td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
<p>4000</p>
</td>
<td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
<p>2000</p>
</td>
</tr>
</tbody>
</table>
<hr />
<div className="mt-12">

<h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
              Registration fee for workshop & Hands on training
                      </h2>
              
<table className="min-w-full divide-y divide-gray-200">

                            <tbody className="divide-y divide-gray-200">
                               

                            <tr>
<td colspan="2" >
<p className="text-center"><strong>Delegates, Post Graduates &amp; Under Graduates</strong></p>
</td>
</tr>
<tr>
<td >
<p>Workshop</p>
</td>
<td >
<p>Hands on training</p>
</td>
</tr>
<tr>
<td >
<p>Rs. 1000/-</p>
</td>
<td >
<p>Rs. 1000/-</p>
</td>
</tr>
<tr>
<td colspan="2" >
<p className="text-center">Both together &ndash; Rs.1500/-</p>
</td>
</tr>
</tbody>
</table>
<hr />

</div>

            </div>
           
          </div>
          <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
            <NewsLatterBox />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
