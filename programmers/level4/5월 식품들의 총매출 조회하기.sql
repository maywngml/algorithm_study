select fp.product_id, fp.product_name, truncate(fp.price * sum(fo.amount), 0) as total_sales
from food_product fp
left outer join food_order fo on fp.product_id = fo.product_id
where date_format(fo.produce_date, '%Y-%m') = '2022-05'
group by fp.product_id
order by fp.price * sum(fo.amount) desc, fp.product_id