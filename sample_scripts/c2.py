import udc as dc
import pandas as pd
import os
src_file_path=os.path.join(r'D:\mdc\mdc\test_files','src.csv')
tgt_file_path=os.path.join(r'D:\mdc\mdc\test_files','tgt.csv')
rpt_file_path=os.path.join(r'D:\mdc\mdc\test_files','tmp_report.html')
df_src=pd.read_csv(src_file_path)
df_tgt=pd.read_csv(tgt_file_path)
compare_columns=['fenergo_id']
c1=dc.Compare(df_src,df_tgt,join_columns=compare_columns)
#rpt_str=c1.report()
html_report = c1.report(html_file=rpt_file_path)
